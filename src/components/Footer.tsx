import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-empire-gray text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link href="/">
              <Image src="/images/empire-logo.webp" alt="Empire Corporation Logo" width={150} height={64} className="mb-4" />
            </Link>
            <p className="text-sm">
              Your trusted partner for high-quality roofing solutions in [Your Service Area - e.g., Massachusetts]. We are committed to protecting your home or business.
            </p>
            {/* Social Media Icons (Optional) */}
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><svg>...</svg></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><svg>...</svg></a>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition duration-300">Services</Link></li>
              {/* <li><Link href="/our-work" className="hover:text-white transition duration-300">Our Work</Link></li> */}
              <li><Link href="/contact#estimate-form" className="hover:text-white transition duration-300">Free Estimate</Link></li>
              <li><Link href="/contact" className="hover:text-white transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li><Link href="/services/roof-installation" className="hover:text-white transition duration-300">Roof Installation</Link></li>
              <li><Link href="/services/roof-repair" className="hover:text-white transition duration-300">Roof Repair</Link></li>
              <li><Link href="/services/commercial-roofing" className="hover:text-white transition duration-300">Commercial Roofing</Link></li>
              <li><Link href="/services/residential-roofing" className="hover:text-white transition duration-300">Residential Roofing</Link></li>
              <li><Link href="/services/gutter-installation" className="hover:text-white transition duration-300">Gutter Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <address className="not-italic space-y-2">
              <p>373 Salem St, Sl 02, Malden, MA 02148</p> {/* Placeholder address - update if needed */}
              <p>Phone: <a href="tel:+17819575684" className="hover:text-white transition duration-300">+1 (781) 957-5684</a></p> {/* Placeholder number - update if needed */}
              <p>Email: <a href="mailto:contact@empireccorp.com" className="hover:text-white transition duration-300">contact@empireccorp.com</a></p> {/* Placeholder email - update if needed */}
            </address>
            <Link href="/contact#estimate-form" className="mt-4 inline-block bg-empire-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Empire Corporation. All Rights Reserved.</p>
          {/* Add links to Privacy Policy / Terms if needed */}
          {/* <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

