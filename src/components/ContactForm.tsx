'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({ ...prevData, [id]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('You must agree to receive communications.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ // Reset form on success
          name: '',
          phone: '',
          email: '',
          service: '',
          address: '',
          message: '',
          consent: false,
        });
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue"
          placeholder="Your Name"
          required
          disabled={status === 'loading'}
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue"
          placeholder="(123) 456-7890"
          required
          disabled={status === 'loading'}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue"
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
        <select 
          id="service" 
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue bg-white"
          required
          disabled={status === 'loading'}
        >
          <option value="">Select a Service</option>
          <option value="roof-installation">Roof Installation</option>
          <option value="roof-repair">Roof Repair</option>
          <option value="roof-inspection">Roof Inspection</option>
          <option value="commercial-roofing">Commercial Roofing</option>
          <option value="residential-roofing">Residential Roofing</option>
          <option value="gutter-services">Gutter Services</option>
          <option value="emergency-services">Emergency Services</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="md:col-span-2">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Property Address</label>
        <input 
          type="text" 
          id="address" 
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue"
          placeholder="123 Main St, City, State, ZIP"
          required
          disabled={status === 'loading'}
        />
      </div>
      
      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Project Details</label>
        <textarea 
          id="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-empire-blue"
          placeholder="Please provide any additional details about your project..."
          disabled={status === 'loading'}
        ></textarea>
      </div>
      
      <div className="md:col-span-2">
        <div className="flex items-start mb-4">
          <input 
            type="checkbox" 
            id="consent" 
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2 h-4 w-4 text-empire-blue focus:ring-empire-blue border-gray-300 rounded"
            required
            disabled={status === 'loading'}
          />
          <label htmlFor="consent" className="text-gray-700 text-sm">
            By submitting this form, I agree to receive SMS messages and emails about my roofing project. I understand I can opt out at any time.
          </label>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <button 
          type="submit" 
          className={`bg-empire-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full md:w-auto ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>

      {status === 'success' && (
        <div className="md:col-span-2 mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          Thank you! Your request has been submitted successfully. We will contact you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="md:col-span-2 mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
          Error: {errorMessage || 'Could not submit the form. Please try again.'}
        </div>
      )}
    </form>
  );
}

