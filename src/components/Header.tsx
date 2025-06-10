import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/empire-logo.webp" alt="Empire Corporation Logo" width={180} height={76} priority />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-empire-gray hover:text-empire-blue transition duration-300">Home</Link>
          <Link href="/about" className="text-empire-gray hover:text-empire-blue transition duration-300">About Us</Link>
          <Link href="/services" className="text-empire-gray hover:text-empire-blue transition duration-300">Services</Link>
          <Link href="/our-work" className="text-empire-gray hover:text-empire-blue transition duration-300">Our Work</Link>
          <Link href="/testimonials" className="text-empire-gray hover:text-empire-blue transition duration-300">Testimonials</Link>
          <Link href="/contact" className="text-empire-gray hover:text-empire-blue transition duration-300">Contact Us</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+17819575684" className="text-empire-gray hover:text-empire-blue transition duration-300">+1 (781) 957-5684</a> {/* Placeholder number - update if needed */}
          <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get a Free Estimate
          </Link>
        </div>
        {/* Mobile Menu Button (Implementation TBD) */}
        <div className="md:hidden flex items-center">
          <button className="text-empire-gray focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (Implementation TBD) */}
    </header>
  );
};

export default Header;

