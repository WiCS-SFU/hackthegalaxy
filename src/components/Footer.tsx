"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import fullLogo from "@/assets/images/shared/full_logo.svg";

export default function Footer() {
  const [open, setOpen] = useState(false);

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
    <footer className="w-full flex flex-col items-center py-8 gap-2.5 bg-purple-600 text-neutral-100">
      {/* DESKTOP */}
      <div className="hidden md:block w-full">
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-8 py-8">
          {/* Logo */}
          <div className="flex items-center justify-center shrink-0 w-[276px] h-[100px]">
            <a href="#hero" aria-label="Back to top" onClick={handleAnchorClick("#hero")}>
              <Image
                src={fullLogo}
                alt="Hack the Galaxy full logo"
                width={276}
                height={100}
                priority
              />
            </a>
          </div>

          {/* Tagline + Button */}
          <div className="flex flex-col items-start gap-2 flex-1 ml-8 justify-center">
            <div className="text-display-sm text-neutral-100 text-body-lg-bold">
              Where creativity takes orbit.
            </div>

            <Link
              href="#apply"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-pink-100 text-heading-xs text-neutral-100 transition-colors hover:bg-purple-700 hover:border-purple-700"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Links + Copyright */}
          <div className="flex flex-col pt-10">
            <div className="w-full flex justify-center items-center gap-2 text-body-sm-bold uppercase text-pink-300">
              <a
                href="mailto:wics@sfu.ca"
                className="hover:opacity-80 transition-opacity"
              >
                EMAIL
              </a>
              <a
                href="https://www.instagram.com/sfuwics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/sfu-wics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.sfuwics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                SFUWICS.COM
              </a>
            </div>

            <div className="text-right text-body-sm text-neutral-100">
              © {new Date().getFullYear()} SFU Women in Computing Science
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full">
        <div className="mx-auto w-full px-4 py-8 flex flex-col gap-4 sm:max-w-[393px]">
          <div className="flex items-start justify-between gap-2">
            <div className="shrink-0 w-[193px] max-w-[45vw]">
              <a href="#hero" aria-label="Back to top" onClick={handleAnchorClick("#hero")}>
                <Image
                  src={fullLogo}
                  alt="Hack the Galaxy full logo"
                  width={193}
                  height={70}
                  priority
                />
              </a>
            </div>

            <div className="flex flex-col items-end gap-2 text-right">
              <div className="text-body-sm-bold text-neutral-100">
                Where creativity <br />
                takes orbit.
              </div>

              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-2 py-2 rounded-md border border-pink-100 text-accent-xs text-neutral-100 transition-colors hover:bg-purple-700 hover:border-purple-700"
              >
                APPLY NOW
              </Link>
            </div>
          </div>

          <div className="flex flex-col pt-8">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-body-sm-bold uppercase text-pink-300">
              <a
                href="mailto:wics@sfu.ca"
                className="hover:opacity-80 transition-opacity"
              >
                EMAIL
              </a>
              <a
                href="https://www.instagram.com/sfuwics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/sfu-wics/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.sfuwics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                SFUWICS.COM
              </a>
            </div>

            <div className="text-center text-body-sm text-neutral-100">
              © {new Date().getFullYear()} SFU Women in Computing Science
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
