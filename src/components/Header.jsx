import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'
import empireLogo from '../assets/empire-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Emergency Service: (781) 957-5684</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@empireccorp.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">Serving Boston & Greater Boston Area</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={empireLogo} 
              alt="Empire Corporation" 
              className="h-12 w-auto max-w-[200px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Services
            </a>
            <a href="#our-work" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Our Work
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Request Emergency Service
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                About Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Services
              </a>
              <a href="#our-work" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Our Work
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Request Emergency Service
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Get Free Assessment
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

