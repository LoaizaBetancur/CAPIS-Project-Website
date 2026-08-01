"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export interface MobileMenuLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: MobileMenuLink[];
  /** Absolute pathname for highlighting the active link */
  activePath: string;
  /** ID for the menu panel (for aria-controls binding) */
  id?: string;
}

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/**
 * Accessible slide-out mobile navigation drawer.
 *
 * Renders a full-width panel beneath the header bar with an unordered
 * list of navigation links.  When `isOpen` transitions from false→true
 * focus is programmatically moved into the panel so keyboard users
 * aren't stranded.  Pressing Escape closes the panel.
 */
export default function MobileMenu({
  isOpen,
  onClose,
  links,
  activePath,
  id = "mobile-menu",
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  /* Move focus into the panel when it opens */
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstLink = panelRef.current.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  /* Escape key closes */
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      id={id}
      className="border-t border-border bg-bg lg:hidden"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <nav className="mx-auto max-w-content px-4 py-4">
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const active = isLinkActive(link.href, activePath);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    active
                      ? "bg-accent-soft text-accent"
                      : "text-text-muted hover:bg-accent-soft/60 hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}