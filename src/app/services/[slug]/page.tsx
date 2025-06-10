import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define service data (can be moved to a separate file/CMS later)
const services = [
  {
    slug: 'roof-installation',
    title: 'Roof Installation',
    description: 'Professional installation of high-quality roofing systems for residential and commercial properties. We work with various materials like asphalt shingles, metal, tile, and more, ensuring a durable and long-lasting roof tailored to your needs.',
    details: [
      'Consultation and material selection guidance.',
      'Removal of old roofing materials (if necessary).',
      'Installation of underlayment and flashing.',
      'Precise installation of chosen roofing material.',
      'Site cleanup and final inspection.',
    ],
    imagePlaceholder: 'Roof Installation Detail Image',
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    description: 'Expert repair services to fix leaks, storm damage, missing shingles, and other issues to extend the life of your existing roof. Prompt service to prevent further damage.',
    details: [
      'Thorough inspection to identify the source of the problem.',
      'Repair of leaks, cracks, and damaged sections.',
      'Replacement of missing or damaged shingles/tiles.',
      'Flashing repair and replacement.',
      'Preventative maintenance advice.',
    ],
    imagePlaceholder: 'Roof Repair Detail Image',
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description: 'Comprehensive roof inspections to assess the condition of your roof, identify potential problems, and provide detailed reports. Ideal for homeowners, buyers, or insurance purposes.',
    details: [
      'Detailed visual inspection of all roof components.',
      'Assessment of shingles, flashing, gutters, and vents.',
      'Identification of potential leak points or damage.',
      'Written report with findings and recommendations.',
      'Photographic documentation of key areas.',
    ],
    imagePlaceholder: 'Roof Inspection Detail Image',
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Specialized roofing solutions for commercial buildings, including flat roofs, TPO, EPDM, metal roofing systems, and roof coatings. We understand the unique demands of commercial properties.',
    details: [
      'Installation and replacement of commercial roof systems.',
      'Regular maintenance programs.',
      'Leak detection and repair for flat roofs.',
      'Energy-efficient roofing options.',
      'Compliance with building codes and regulations.',
    ],
    imagePlaceholder: 'Commercial Roofing Detail Image',
  },
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    description: 'Complete roofing services for homeowners, ensuring your home is protected with a durable and aesthetically pleasing roof. We prioritize quality materials and expert installation.',
    details: [
      'New roof installation and replacement.',
      'Wide range of shingle styles and colors.',
      'Ventilation and insulation assessment.',
      'Gutter integration and repair.',
      'Warranty options for materials and labor.',
    ],
    imagePlaceholder: 'Residential Roofing Detail Image',
  },
  {
    slug: 'gutter-installation',
    title: 'Gutter Installation & Repair',
    description: 'Installation and repair of gutter systems to ensure proper water drainage and protect your property foundation, siding, and landscaping from water damage.',
    details: [
      'Seamless gutter installation in various materials.',
      'Gutter cleaning and maintenance.',
      'Repair of leaks, sagging, or damaged gutters.',
      'Installation of gutter guards to prevent clogs.',
      'Downspout installation and repair.',
    ],
    imagePlaceholder: 'Gutter Services Detail Image',
  },
  {
    slug: 'emergency-roof-services',
    title: 'Emergency Roof Services',
    description: 'Rapid response for emergency roof situations like storm damage, fallen trees, or severe leaks to minimize further damage to your property. Available 24/7.',
    details: [
      'Temporary tarping and damage mitigation.',
      'Quick assessment of emergency situation.',
      'Coordination with insurance companies.',
      'Prompt scheduling of permanent repairs.',
      'Safety-focused approach during emergencies.',
    ],
    imagePlaceholder: 'Emergency Services Detail Image',
  },
];

// Function to get service data by slug
const getServiceData = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

// Generate static paths for each service
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Define props type
type ServicePageProps = {
  params: { slug: string };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceData(params.slug);

  // If service not found, return 404
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-empire-gray py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-2 text-center md:text-left">{service.title}</h1>
          <nav aria-label="Breadcrumb" className="text-center md:text-left">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white">
                  <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/services" className="ml-1 text-sm font-medium text-gray-300 hover:text-white md:ml-2">Services</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{service.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                {/* Placeholder image - Replace with actual service image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">{service.imagePlaceholder}</p>
                </div>
                {/* <Image src={`/images/services/${service.slug}.jpg`} alt={service.title} layout="fill" objectFit="cover" /> */}
              </div>
              
              <h2 className="text-2xl font-bold text-empire-gray mb-4">About {service.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {service.details && service.details.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-empire-gray mb-3">Key Aspects of Our Service:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </>
              )}
              
              <p className="text-gray-600 mb-8">
                At Empire Corporation, we are committed to delivering the highest quality {service.title.toLowerCase()} services. Our team uses top-grade materials and proven techniques to ensure your complete satisfaction and the longevity of your roof.
              </p>
              
              <Link href="/contact#estimate-form" className="inline-block bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Request an Estimate for {service.title}
              </Link>
            </div>
            
            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-empire-gray mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {services
                    .filter(s => s.slug !== service.slug) // Exclude current service
                    .map(otherService => (
                      <li key={otherService.slug}>
                        <Link href={`/services/${otherService.slug}`} className="text-empire-blue hover:text-empire-red transition duration-300 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
                          {otherService.title}
                        </Link>
                      </li>
                  ))}
                </ul>
                <hr className="my-6 border-gray-300" />
                <h3 className="text-xl font-bold text-empire-gray mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us today for a free consultation and estimate.
                </p>
                <Link href="/contact#estimate-form" className="block text-center bg-empire-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Get a Free Estimate
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

