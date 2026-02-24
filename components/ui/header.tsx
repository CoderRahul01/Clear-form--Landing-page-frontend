"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white/90 px-3 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Site branding */}
          <div className="flex items-center z-50 ml-2">
            <Link href="/" onClick={closeMenu}>
              <Image src='/images/logowname.png' width={125} height={125} alt="Logo" priority />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 md:justify-center items-center z-50">
            <ul className="flex items-center gap-14 text-gray-700">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  <Link href={link.href} className="text-[14px] text-gray-700 transition-colors duration-200  block">
                    {link.label}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Early Access button - Desktop */}
          <div className="hidden md:flex z-50 items-center justify-end">
            <Link
              href="/signup"
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 hover:shadow-lg hover:shadow-inset hover:scale-95 transition-all duration-200 hover:border border-gray-400"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 border border-gray-200 rounded-2xl shadow-lg shadow-black/[0.1] backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
            <nav className="px-4 py-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    style={{
                      animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 text-[14px] hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out"
                style={{ animationDelay: "0.4s" }}
              >
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="block w-full text-center bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 transition-all duration-200 rounded-lg px-4 py-3 text-[14px] font-medium hover:scale-105"
                >
                  Get Early Access
                </Link>
              </div>
            </nav>
          </div>
        )}
        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </header>
  );
}
