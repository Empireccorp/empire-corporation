'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for all your roofing needs. We're here to help you with professional solutions.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-empire-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Our customer service team is ready to assist you
              </p>
              <a href="tel:+17819575684" className="text-empire-blue hover:text-empire-red font-bold transition duration-300">
                +1 (781) 957-5684
              </a>
            </div>
            
            {/* Contact Card 2 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-empire-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <a href="mailto:contact@empireccorp.com" className="text-empire-blue hover:text-empire-red font-bold transition duration-300">
                contact@empireccorp.com
              </a>
            </div>
            
            {/* Contact Card 3 */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="bg-empire-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Our office location
              </p>
              <address className="not-italic text-empire-blue font-bold">
                373 Salem St, Sl 02<br />
                Malden, MA 02148
              </address>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100" id="estimate-form">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-empire-gray mb-4">Get Your Free Estimate</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Section - Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our office or send us mail at the address below.
            </p>
          </div>
          
          {/* Map Placeholder - Replace with actual map integration */}
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">Map will be displayed here</p>
          </div>
          
          <div className="text-center mt-8">
            <address className="not-italic text-gray-600">
              <strong className="text-empire-gray">Empire Corporation</strong><br />
              373 Salem St, Sl 02<br />
              Malden, MA 02148<br />
              United States
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
