'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Our Roofing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empire Corporation provides comprehensive roofing solutions for residential and commercial properties.
              Our expert team delivers quality workmanship with attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Roof Installation Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-empire-gray mb-2">Roof Installation</h3>
                <p className="text-gray-600 mb-4">
                  Professional installation of high-quality roofing systems for residential and commercial properties.
                </p>
                <Link href="/services/roof-installation" className="text-empire-blue hover:text-empire-red font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Roof Repair Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-empire-gray mb-2">Roof Repair</h3>
                <p className="text-gray-600 mb-4">
                  Expert repair services to fix leaks, damage, and extend the life of your existing roof.
                </p>
                <Link href="/services/roof-repair" className="text-empire-blue hover:text-empire-red font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Commercial Roofing Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-empire-gray mb-2">Commercial Roofing</h3>
                <p className="text-gray-600 mb-4">
                  Specialized roofing solutions for commercial buildings, warehouses, and industrial facilities.
                </p>
                <Link href="/services/commercial-roofing" className="text-empire-blue hover:text-empire-red font-medium transition duration-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services" className="bg-empire-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Why Choose Empire Corporation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to excellence in every project we undertake. Here's what sets us apart:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-empire-red h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium materials from trusted suppliers to ensure durability and longevity.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-empire-red h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Timely Completion</h3>
              <p className="text-gray-600">
                We respect your time and complete projects efficiently without compromising on quality.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-empire-red h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled professionals have years of experience in the roofing industry.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center">
              <div className="bg-empire-red h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Comprehensive Service</h3>
              <p className="text-gray-600">
                From initial consultation to final inspection, we provide end-to-end roofing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-empire-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Roofing Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation estimate. Our team is ready to help you with all your roofing needs.
          </p>
          <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section - Placeholder for future testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-empire-gray">John Doe</h4>
                  <p className="text-sm text-gray-500">Residential Client</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Empire Corporation did an excellent job on our roof replacement. The team was professional, efficient, and the quality of work exceeded our expectations."
              </p>
            </div>
            
            {/* Testimonial 2 - Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-empire-gray">Jane Smith</h4>
                  <p className="text-sm text-gray-500">Commercial Client</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We hired Empire Corporation for our office building roof repair. They completed the project on time and within budget. Highly recommended!"
              </p>
            </div>
            
            {/* Testimonial 3 - Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-empire-gray">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">Property Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a property manager, I've worked with many roofing companies. Empire Corporation stands out for their reliability, quality, and customer service."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white" id="estimate-form">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-empire-gray mb-4">Get Your Free Estimate</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
