"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { useState, useEffect, useCallback } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  // Reset state when pathname changes
  useEffect(() => {
    // Only set hash if it exists in URL, otherwise reset
    if (window.location.hash) {
      setActiveHash(window.location.hash);
      setHasScrolled(true);
    } else {
      setActiveHash("");
      setHasScrolled(false);
    }
  }, [pathname]);

  // Track which section is currently in view
  useEffect(() => {
    // Get all section IDs from navigation items with hash
    const sectionIds = navigationItems
      .filter((item) => item.href.includes("#"))
      .map((item) => item.href.split("#")[1]);

    if (sectionIds.length === 0) return;

    // Track scroll to enable section detection only after user scrolls
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
      // Reset to no active hash when scrolled to top
      if (window.scrollY < 100) {
        setActiveHash("");
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Only process if user has scrolled
      if (!hasScrolled) return;

      // Find the section that is most visible
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Get the topmost visible section
        const topEntry = visibleEntries.reduce((prev, curr) => {
          return prev.boundingClientRect.top < curr.boundingClientRect.top
            ? prev
            : curr;
        });
        setActiveHash(`#${topEntry.target.id}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, hasScrolled]);

  // Handle smooth scroll for hash links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return; // No hash, let default behavior happen

      const hash = href.slice(hashIndex);
      const targetPath = href.slice(0, hashIndex) || "/";

      // If we're already on the same page, handle smooth scroll
      if (pathname === targetPath || (targetPath === "/about-us" && pathname === "/about-us")) {
        e.preventDefault();
        const targetId = hash.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          setHasScrolled(true);
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Update URL hash without page jump
          window.history.pushState(null, "", hash);
          setActiveHash(hash);
        }
      }
    },
    [pathname]
  );

  // Determine if a nav item is active
  const isActive = (href: string): boolean => {
    const hasHash = href.includes("#");
    const itemPath = hasHash ? href.split("#")[0] : href;
    const itemHash = hasHash ? `#${href.split("#")[1]}` : "";

    // If we're on a different page, nothing with hash should be active
    if (pathname !== itemPath && itemPath !== "") {
      return false;
    }

    // If item has a hash, check if it matches the active hash
    if (hasHash) {
      return activeHash === itemHash;
    }

    // For items without hash (like "ABOUT US"), only active if no hash is active
    // and we're on that page
    return pathname === itemPath && activeHash === "";
  };

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-uob-blue"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <ul className="hidden lg:flex items-center gap-8">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-semibold text-sm tracking-wide transition-colors hover:text-uob-red ${
                isActive(item.href) ? "text-uob-red" : "text-uob-blue"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-full right-0 bg-white shadow-lg py-4 px-6 min-w-[200px] rounded-b-lg">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 font-semibold text-sm tracking-wide transition-colors hover:text-uob-red ${
                  isActive(item.href) ? "text-uob-red" : "text-uob-blue"
                }`}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
