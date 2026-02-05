export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: "ABOUT US", href: "/about-us" },
  { label: "KEY PERSONNEL", href: "/about-us#key-personnel" },
  { label: "CONTACT", href: "/about-us#contact" },
];
