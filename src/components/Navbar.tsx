"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/shared/logo.svg";
import menu from "@/assets/images/shared/menu.svg";
import close from "@/assets/images/shared/x.svg";
import fullLogo from "@/assets/images/shared/full_logo.svg";

type NavItem = {
  label: string;
  href: string; 
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "ABOUT", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "OUR TEAM", href: "#our-team" },
    { label: "APPLY", href: "#apply" },
  ];

  const handleAnchorClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;

      e.preventDefault();

      const el = document.querySelector(href);
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-b from-neutral-800 to-transparent pb-6">
      <div className="mx-auto w-full max-w-306 flex items-center justify-between py-6 px-8">
        {/* MOBILE: Menu (left) */}
        <button
          type="button"
          className="md:hidden text-heading-xs text-neutral-100"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Image
            src={open ? close : menu}
            alt={open ? "Close menu" : "Open menu"}
            width={24}
            height={24}
          />
        </button>

        {/* DESKTOP: Logo */}
        <Link href="/" onClick={handleAnchorClick("#hero")} className="hidden md:flex items-center gap-3">
          <Image src={logo} alt="Hack the Galaxy logo" width={50} height={45} priority />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => {
            const isApply = item.label === "APPLY";

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleAnchorClick(item.href)}
                  className={`flex items-center justify-center py-2 px-4 rounded-md text-heading-xs transition-colors ${
                    isApply
                      ? "border border-pink-100 text-neutral-100 hover:bg-purple-600 hover:border-purple-600"
                      : "text-neutral-100 hover:bg-purple-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* MOBILE: APPLY (right) */}
        <Link
          href="#apply"
          onClick={handleAnchorClick("#apply")}
          className="md:hidden flex items-center justify-center py-2 px-4 rounded-md border border-pink-100 text-heading-xs text-neutral-100 hover:bg-purple-600 hover:border-purple-600 transition-colors"
        >
          APPLY
        </Link>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <div className="md:hidden fixed inset-0 z-50 pointer-events-none">
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
        />

        {/* Sliding panel */}
        <div
          role="dialog"
          aria-modal="true"
          className={`absolute inset-y-0 left-0 w-full bg-purple-600 transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
            ${open ? "translate-x-0 pointer-events-auto" : "-translate-x-full"}`}
        >
          <div className="flex h-full w-full flex-col justify-between px-4 py-16">
            {/* Top row: Close */}
            <div className="w-full flex justify-start">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -ml-2"
              >
                <Image src={close} alt="Close menu" width={36} height={36} />
              </button>
            </div>

            {/* Center: Nav items */}
            <ul className="w-full flex flex-col items-start">
              {navItems
                .filter((item) => item.label !== "APPLY")
                .map((item, index, arr) => (
                  <li
                    key={item.href}
                    className={`w-full flex flex-col items-start py-2 ${
                      index !== arr.length - 1 ? "border-b-2 border-neutral-100" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={handleAnchorClick(item.href)}
                      className="w-full inline-flex items-center px-4 py-3 text-neutral-100 text-heading-md rounded-md transition-colors duration-300 hover:bg-[#311080]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Mobile Footer */}
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full flex justify-center items-center gap-xl text-body-sm-bold uppercase text-pink-300">
                <a href="mailto:wics@sfu.ca">EMAIL</a>
                <a href="https://www.instagram.com/sfuwics/" target="_blank" rel="noopener noreferrer">
                  INSTAGRAM
                </a>
                <a href="https://www.linkedin.com/company/sfu-wics/" target="_blank" rel="noopener noreferrer">
                  LINKEDIN
                </a>
                <a href="https://www.sfuwics.com/" target="_blank" rel="noopener noreferrer">
                  SFUWICS.COM
                </a>
              </div>

              <div className="w-full flex justify-center">
                <Link href="/" onClick={handleAnchorClick("#hero")}>
                  <Image src={fullLogo} alt="Hack the Galaxy full logo" width={150} height={45} priority />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
