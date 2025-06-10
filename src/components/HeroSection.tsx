import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/hero-placeholder.jpg')", 
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Professional Roofing Solutions You Can Trust
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Protect your home with high-quality roofing services from Empire Corporation. 
            We deliver excellence in every project, backed by years of experience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300">
              Get a Free Estimate
            </Link>
            <Link href="/services" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-lg text-center transition duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
