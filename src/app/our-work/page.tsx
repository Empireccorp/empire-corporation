'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurWork() {
  // Placeholder data for projects (replace with actual data/CMS later)
  const projects = [
    {
      id: 1,
      title: 'Residential Roof Installation',
      location: 'Malden, MA',
      description: 'Complete roof replacement for a colonial-style home using architectural shingles.',
      imagePlaceholder: 'Residential Project 1',
    },
    {
      id: 2,
      title: 'Commercial Flat Roof',
      location: 'Boston, MA',
      description: 'Installation of a TPO membrane roofing system for a commercial office building.',
      imagePlaceholder: 'Commercial Project 1',
    },
    {
      id: 3,
      title: 'Roof Repair After Storm',
      location: 'Medford, MA',
      description: 'Emergency repairs and shingle replacement after severe weather damage.',
      imagePlaceholder: 'Repair Project 1',
    },
    {
      id: 4,
      title: 'Gutter Installation',
      location: 'Everett, MA',
      description: 'Complete gutter system installation with leaf guards for a residential property.',
      imagePlaceholder: 'Gutter Project 1',
    },
    {
      id: 5,
      title: 'Multi-Family Building Roof',
      location: 'Somerville, MA',
      description: 'Roof replacement for a 3-story apartment building with proper drainage solutions.',
      imagePlaceholder: 'Multi-Family Project 1',
    },
    {
      id: 6,
      title: 'Historic Home Restoration',
      location: 'Cambridge, MA',
      description: 'Careful restoration of a slate roof on a historic Victorian home.',
      imagePlaceholder: 'Historic Project 1',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our portfolio of completed roofing projects. Quality craftsmanship speaks for itself.
          </p>
        </div>
      </div>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-64 bg-gray-300 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                    {project.imagePlaceholder}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-empire-gray mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Note about adding more projects */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              This is a sample of our work. More projects will be added soon.
            </p>
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
    </>
  );
}
