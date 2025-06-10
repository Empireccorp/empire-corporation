import React from 'react';
import Link from 'next/link';

// Define service data (can be moved to a separate file/CMS later)
const services = [
  {
    slug: 'roof-installation',
    title: 'Roof Installation',
    description: 'Professional installation of high-quality roofing systems for residential and commercial properties. We work with various materials like asphalt shingles, metal, tile, and more.',
    imagePlaceholder: 'Roof Installation Image',
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    description: 'Expert repair services to fix leaks, storm damage, missing shingles, and other issues to extend the life of your existing roof.',
    imagePlaceholder: 'Roof Repair Image',
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description: 'Comprehensive roof inspections to assess the condition of your roof, identify potential problems, and provide detailed reports.',
    imagePlaceholder: 'Roof Inspection Image',
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Specialized roofing solutions for commercial buildings, including flat roofs, TPO, EPDM, and metal roofing systems.',
    imagePlaceholder: 'Commercial Roofing Image',
  },
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    description: 'Complete roofing services for homeowners, ensuring your home is protected with a durable and aesthetically pleasing roof.',
    imagePlaceholder: 'Residential Roofing Image',
  },
  {
    slug: 'gutter-installation',
    title: 'Gutter Installation & Repair',
    description: 'Installation and repair of gutter systems to ensure proper water drainage and protect your property foundation.',
    imagePlaceholder: 'Gutter Services Image',
  },
  {
    slug: 'emergency-roof-services',
    title: 'Emergency Roof Services',
    description: 'Rapid response for emergency roof situations like storm damage or severe leaks to minimize further damage.',
    imagePlaceholder: 'Emergency Services Image',
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Roofing Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empire Corporation offers a wide range of professional roofing services to meet the needs of homeowners and businesses.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 flex flex-col">
                <div className="h-48 bg-gray-300 relative">
                  {/* Replace with actual service image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {service.imagePlaceholder}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-empire-gray mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`} className="text-empire-blue hover:text-empire-red font-medium transition duration-300 mt-auto">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-empire-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Roofing Expert?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Empire Corporation today for a free, no-obligation estimate. Let us handle your roofing project with professionalism and care.
          </p>
          <Link href="/contact#estimate-form" className="bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

