"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false; // simulate login

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Booking", href: "/booking" },
    { name: "Calendar", href: "/calendar" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="relative w-full h-[4cm]">
      {/* Eclipse Animated Background */}
      <div className="absolute inset-0 eclipse-bg"></div>

      <div className="relative z-10 container mx-auto flex items-center justify-between px-8 h-full">
        {/* Logo + Brand with proper spacing */}
        <div className="flex items-center gap-10"> {/* <-- Increased gap */}
          <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden logo-glow ring-2 ring-yellow-400 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Eclipse Media Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="flex items-center text-4xl md:text-5xl font-extrabold tracking-wide">
  {/* Eclipse Part */}
  <span className="relative eclipse-text mr-4">
    Eclipse
    <span className="absolute inset-0 eclipse-shine"></span>
  </span>

  {/* Media Part */}
  <span className="media-text">Media</span>
</h1>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="nav-link hover:text-yellow-400 transition-all"
    >
      {link.name}
    </Link>
  ))}

  {isLoggedIn ? (
    <div className="flex items-center gap-3 ml-4">
      <span className="text-yellow-300 font-semibold">Hi, Alex</span>
      <button className="px-4 py-1 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all">
        Logout
      </button>
    </div>
  ) : (
    <button className="px-4 py-1 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition-all">
      Login
    </button>
  )}
</nav>

{/* Mobile Hamburger */}
<div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-yellow-400 hover:text-yellow-300"
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>

{/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden mobile-menu flex flex-col items-center gap-4 py-6 bg-black/90 border-t border-yellow-400/30 animate-fadeIn">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="block text-yellow-300 hover:text-yellow-400 text-xl"
        onClick={() => setMenuOpen(false)}
      >
        {link.name}
      </Link>
    ))}
    {isLoggedIn ? (
      <>
        <span className="text-yellow-300 font-semibold">Hi, Alex</span>
        <button className="px-5 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all">
          Logout
        </button>
      </>
    ) : (
      <button className="px-5 py-2 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition-all">
        Login
      </button>
    )}
  </div>
)}
    </div>
    </header>
  );
}
