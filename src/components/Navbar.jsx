import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Navbar({ variant = "primary" }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isSticky = variant === "sticky";
  const isPrimary = variant === "primary";

  
  const links = [
    { name: "Home", href: "/", type: "route" },
    { name: "About", href: "/about", type: "route" },
    { name: "Vehicle Fleet", href: "/see-more", type: "route" },
    { name: "Contact", href: "#booking", type: "anchor" },
  ];

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMenu(false);
      setIsClosing(false);
    }, links.length * 150 + 300);
  };

  return (
    <header
      className={[
        "w-full",
        isSticky
          ? "bg-black/90 backdrop-blur border-b border-gray-800 shadow-[0_2px_10px_rgba(255,215,0,0.15)]"
          : "",
      ].join(" ")}
      role="banner"
    >
      {/* Top black strip (only for primary navbar) */}
      {isPrimary && (
        <div className="hidden md:block bg-black text-gray-400 text-[11px] tracking-widest">
          <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-end gap-4">
            <a
              href="tel:+2348145272818"
              className="hover:text-yellow-400 transition-colors"
            >
              +234 8145 27 2818
            </a>
            <span className="opacity-40">|</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Lagos Nigeria
            </a>
          </div>
        </div>
      )}

      {/* Main nav row */}
      <nav
        className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between bg-black text-white relative"
        aria-label="Main"
      >
        {/* Brand */}
        <Link
          to="/"
          className="font-semibold tracking-[0.25em] uppercase text-yellow-400 hover:opacity-80 text-lg"
        >
          LUXE AUTOS
        </Link>

        {/* Center links (desktop only) */}
        <ul className="hidden md:flex items-center gap-10 text-[13px] tracking-widest uppercase">
          {links.map((link, i) => (
            <li key={i}>
              {link.type === "route" ? (
                <Link to={link.href} className="hover:text-yellow-400 transition">
                  {link.name}
                </Link>
              ) : (
                <a href={link.href} className="hover:text-yellow-400 transition">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          {/* Search Button */}
          <button
            aria-label="Search"
            onClick={() => setShowSearch(true)}
            className="p-1.5 hover:text-yellow-400 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="M20 20L17 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            aria-label="Menu"
            onClick={() => setShowMenu(true)}
            className="p-1.5 hover:text-yellow-400 transition block md:hidden"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Slide-down Search Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 flex items-center justify-center z-[100] transform transition-all duration-500 ease-in-out ${
          showSearch ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-full max-w-lg px-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-black border border-gray-700 text-white text-lg px-4 py-3 rounded-md focus:outline-none focus:border-yellow-400"
            autoFocus
          />
          <button
            className="absolute top-1/2 right-8 -translate-y-1/2 text-gray-400 hover:text-white"
            onClick={() => setShowSearch(false)}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center text-white z-[100] transition-opacity duration-500">
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
            onClick={closeMenu}
          >
            ✕
          </button>
          <ul className="flex flex-col items-center gap-8 text-xl tracking-widest uppercase">
            {links.map((link, i) => {
              const delayIn = `${i * 150}ms`;
              const delayOut = `${(links.length - 1 - i) * 150}ms`;
              return (
                <li
                  key={i}
                  className={`transform transition-all duration-500 ease-out ${
                    isClosing
                      ? `opacity-0 translate-y-4 delay-[${delayOut}]`
                      : `opacity-100 translate-y-0 delay-[${delayIn}]`
                  }`}
                >
                  {link.type === "route" ? (
                    <Link to={link.href} onClick={closeMenu} className="hover:text-yellow-400">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} onClick={closeMenu} className="hover:text-yellow-400">
                      {link.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
