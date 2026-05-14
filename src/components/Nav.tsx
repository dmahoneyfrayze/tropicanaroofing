"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Emergency Repair", href: "/storm-damage" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/free-estimate" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-navy text-white text-xs md:text-sm font-medium py-2 px-6 flex justify-between items-center z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <span className="hidden md:inline">
            Serving Toronto &amp; GTA Since {siteConfig.founded} · Licensed, Bonded &amp; Insured · Free 24-Hour Estimates
          </span>
          <span className="md:hidden">Licensed &amp; Insured · Free Estimates</span>
          <a
            className="flex items-center gap-1 hover:text-orange transition-colors"
            href={siteConfig.phone.href}
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-navy sticky top-0 border-b border-white/10 shadow-md z-40 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <span className="material-symbols-outlined filled text-orange text-3xl">roofing</span>
            <span className="font-headline font-extrabold text-2xl text-white tracking-tighter">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-white hover:bg-orange hover:text-white transition-all px-3 py-1 rounded-md font-headline font-bold text-base tracking-tight"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              className="text-white font-headline font-bold hover:text-orange transition-colors"
              href={siteConfig.phone.href}
            >
              {siteConfig.phone.display}
            </a>
            <Link
              className="bg-orange text-white px-5 py-2.5 rounded-lg font-headline font-bold text-sm tracking-tight hover:shadow-lg hover:bg-orange-dark transition-all"
              href="/free-estimate"
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 px-6 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="block text-white hover:text-orange transition-colors font-headline font-bold text-lg py-2 border-b border-white/5"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="block bg-orange text-white px-5 py-3 rounded-lg font-headline font-bold text-center mt-4"
              href={siteConfig.phone.href}
            >
              Call {siteConfig.phone.display}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
