"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className={`font-semibold text-sm tracking-wide transition-colors hover:text-uob-red ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]))
                  ? "text-uob-red"
                  : "text-uob-blue"
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
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]))
                    ? "text-uob-red"
                    : "text-uob-blue"
                }`}
                onClick={() => setIsMenuOpen(false)}
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
