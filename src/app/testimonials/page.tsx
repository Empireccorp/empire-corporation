import React from 'react';
import Link from 'next/link';

// Placeholder data for testimonials (replace with actual data/CMS later)
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'Malden, MA',
    type: 'Residential Client',
    quote: 'Empire Corporation did an excellent job on our roof replacement. The team was professional, efficient, and the quality of work exceeded our expectations. Highly recommended!',
    imagePlaceholder: 'Client 1 Avatar',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Medford, MA',
    type: 'Commercial Client',
    quote: 'We hired Empire Corporation for our office building roof repair. They were responsive, completed the project on time, and stayed within budget. Their communication was great throughout.',
    imagePlaceholder: 'Client 2 Avatar',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    location: 'Everett, MA',
    type: 'Property Manager',
    quote: 'As a property manager, I\'ve worked with many roofing companies. Empire Corporation stands out for their reliability, quality craftsmanship, and excellent customer service. They make my job easier.',
    imagePlaceholder: 'Client 3 Avatar',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    location: 'Somerville, MA',
    type: 'Residential Client',
    quote: 'After the storm, we needed urgent roof repairs. Empire Corporation responded quickly and secured our roof, preventing further damage. Their team was courteous and professional.',
    imagePlaceholder: 'Client 4 Avatar',
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our satisfied customers have to say about their experience with Empire Corporation.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-xs text-gray-500">
                    {/* Placeholder for avatar */}
                    {testimonial.imagePlaceholder}
                  </div>
                  <div>
                    <h4 className="font-bold text-empire-gray">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.type} - {testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  "{testimonial.quote}"
                </p>
                {/* Optional: Add rating stars */}
                {/* <div className="mt-4 text-yellow-500">★★★★★</div> */}
              </div>
            ))}
          </div>
          
          {/* Add a section for submitting testimonials if desired */}
          {/* 
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-empire-gray mb-4">Share Your Experience</h2>
            <p className="text-lg text-gray-600 mb-6">We'd love to hear about your project with Empire Corporation.</p>
            <Link href="/contact?subject=Testimonial" className="bg-empire-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Submit Your Testimonial
            </Link>
          </div>
          */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-empire-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Empire Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our list of satisfied customers. Contact us today for your free roofing estimate.
          </p>
          <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

