import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Empire Corporation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about our commitment to quality, integrity, and customer satisfaction in the roofing industry.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-empire-gray mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for providing reliable and high-quality roofing services, Empire Corporation has grown into a trusted name in [Your Service Area - e.g., Massachusetts]. Our journey began with a simple goal: to protect homes and businesses with superior craftsmanship and exceptional customer care.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have built a reputation for integrity, professionalism, and attention to detail. We understand that your roof is a critical investment, and we treat every project with the utmost importance, ensuring durability and peace of mind for our clients.
              </p>
              <p className="text-gray-600">
                Our experienced team is dedicated to staying updated with the latest industry standards and techniques, allowing us to offer innovative and effective roofing solutions tailored to your specific needs.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder image - Replace with a team photo or relevant image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Company/Team Image Placeholder</p>
              </div>
              {/* <Image src="/images/about-us-placeholder.jpg" alt="Empire Corporation Team" layout="fill" objectFit="cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape our work and relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-empire-red h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Icon for Mission */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional roofing services that protect our clients' properties, enhance their value, and ensure long-lasting peace of mind through quality workmanship and reliable customer care.
              </p>
            </div>
            {/* Value 1: Integrity */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-empire-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Icon for Integrity */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our interactions, building trust with our clients, partners, and team members.
              </p>
            </div>
            {/* Value 2: Quality */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-empire-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Icon for Quality */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-empire-gray mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to using the best materials and employing skilled craftsmanship to deliver durable and reliable roofing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Meet Our Team (Placeholder)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals are the backbone of our success. (Content to be added later)
            </p>
          </div>
          {/* Placeholder for team member profiles */}
          <div className="text-center text-gray-500">
            Team member information will be added here soon.
          </div>
        </div>
      </section>

      {/* Certifications Section - Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-empire-gray mb-4">Certifications & Partnerships (Placeholder)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading manufacturers and hold industry certifications. (Logos/details to be added later)
            </p>
          </div>
          {/* Placeholder for logos */}
          <div className="text-center text-gray-500">
            Certification logos and partnership details will be added here soon.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-empire-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Empire Corporation today for a free consultation and estimate for your next roofing project.
          </p>
          <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
