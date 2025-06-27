import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Clock, 
  Shield, 
  Snowflake, 
  Settings, 
  CheckCircle, 
  Phone,
  ArrowRight 
} from 'lucide-react'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    condoName: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you within 2 hours.')
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4 mr-2" />
                2-Hour Emergency Response Guaranteed
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional Building Maintenance for 
                <span className="text-red-600"> Boston Area Condominiums</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive maintenance solutions designed specifically for the unique challenges 
                of New England weather. From snow and ice management to year-round preventive care.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">2-Hour Response</div>
                  <div className="text-sm text-gray-600">Guaranteed emergency service</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Snowflake className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Weather Experts</div>
                  <div className="text-sm text-gray-600">New England climate specialists</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Licensed & Insured</div>
                  <div className="text-sm text-gray-600">Professional & reliable</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Camera className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Full Transparency</div>
                  <div className="text-sm text-gray-600">Photo documentation & guarantees</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Serving Greater Boston</span>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Building Assessment
              </h2>
              <p className="text-gray-600">
                Complete the form below and we'll contact you within 2 hours to schedule 
                your complimentary maintenance evaluation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(781) 957-5684"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="condoName" className="block text-sm font-medium text-gray-700 mb-1">
                  Condominium/Building Name
                </label>
                <Input
                  id="condoName"
                  name="condoName"
                  type="text"
                  value={formData.condoName}
                  onChange={handleInputChange}
                  placeholder="Name of your condominium or building"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your maintenance needs
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe any specific maintenance concerns or services you're interested in..."
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
              >
                Get My Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive communications from Empire Corporation. 
                We respect your privacy and will never share your information.
              </p>
            </form>

            {/* Emergency Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Need immediate assistance?
              </p>
              <a 
                href="tel:7819575684" 
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Emergency Line: (781) 957-5684
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

