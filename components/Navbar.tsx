"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={1000}
                height={1000}
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6 items-center">
            <Link
              href="/"
              className=" hover:text-emerald-600 transition-colors duration-200 text-sm sm:text-base font-medium">
              Home
            </Link>
            <Link
              href="/about-us"
              className=" hover:text-emerald-600 transition-colors duration-200 text-sm sm:text-base font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-5">
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-indigo-700 focus:outline-none cursor-pointer">
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>

            <SignedOut>
              <SignInButton>
                <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-2 space-y-2 pb-4 h-[50vh]">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block  hover:text-emerald-600 text-sm font-medium">
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-emerald-600 text-sm font-medium">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
