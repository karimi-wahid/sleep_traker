import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/CheckUser";

export default async function Navbar() {
  const user = await checkUser();
  console.log("Current User:", user);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Restify Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-extrabold text-[#199473] tracking-tight">
              Restify
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#199473] transition duration-200 text-sm sm:text-base font-medium">
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-[#199473] transition duration-200 text-sm sm:text-base font-medium">
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-[#199473] transition duration-200 text-sm sm:text-base font-medium">
              Contact
            </Link>

            {/* Auth Buttons */}
            <SignedOut>
              <SignInButton>
                <button className="bg-[#199473] hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
