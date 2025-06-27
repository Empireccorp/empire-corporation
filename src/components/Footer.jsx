import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import empireLogo from '../assets/empire-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={empireLogo} 
              alt="Empire Corporation" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional building maintenance services for condominiums across Boston and the Greater Boston Area. 
              Your trusted partner for reliable, efficient, and comprehensive property maintenance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#maintenance-plans" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Maintenance Plans
                </a>
              </li>
              <li>
                <a href="#digital-platform" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Digital Platform
                </a>
              </li>
              <li>
                <a href="#our-work" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Roofing Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  HVAC Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Plumbing Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Painting Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Professional Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  General Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">24/7 Emergency</p>
                  <p className="text-white font-medium">(781) 957-5684</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-white font-medium">contact@empireccorp.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white font-medium">74 Franklin St, Allston, MA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Service Area</p>
                  <p className="text-white font-medium">Boston & Greater Boston Area</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Business Hours</p>
                  <p className="text-white font-medium">Mon-Fri: 7AM-6PM</p>
                  <p className="text-white font-medium">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-red-600 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Need Emergency Maintenance Service?
            </h3>
            <p className="text-red-100 mb-4">
              Our team is available 24/7 for urgent building maintenance issues
            </p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
            >
              Call Emergency Line: (781) 957-5684
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2024 Empire Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

