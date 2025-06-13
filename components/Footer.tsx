import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-lg font-bold text-[#199473]">Restify</h2>
            <p className="text-gray-600 text-sm max-w-xs">
              Track your sleep, improve your health, and wake up feeling refreshed.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#199473] transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-[#199473] transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-[#199473] transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Restify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
