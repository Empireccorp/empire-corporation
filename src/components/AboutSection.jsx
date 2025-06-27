import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import teamPhoto from '../assets/team-photo.jpg'

const AboutSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Buildings Served",
      icon: <Shield className="h-6 w-6" />
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6" />
    },
    {
      number: "24/7",
      label: "Emergency Service",
      icon: <Clock className="h-6 w-6" />
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      icon: <Star className="h-6 w-6" />
    }
  ]

  const values = [
    {
      title: "Professional Excellence",
      description: "Our team consists of licensed, insured, and highly trained professionals committed to delivering exceptional service quality."
    },
    {
      title: "Reliable Service",
      description: "We understand that building maintenance can't wait. That's why we guarantee our 2-hour emergency response time, 24/7."
    },
    {
      title: "Transparent Communication",
      description: "We believe in complete transparency with photo documentation, detailed reports, and clear pricing for every service."
    },
    {
      title: "Local Expertise",
      description: "Based in Allston and serving the Greater Boston Area, we understand the unique challenges of New England weather and building maintenance."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            About Empire Corporation
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Building Maintenance Partner
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Allston, Empire Corporation has been providing comprehensive 
            building maintenance services to the Greater Boston Area for over 15 years.
          </p>
        </div>

        {/* Team Photo and Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={teamPhoto} 
              alt="Empire Corporation Team" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Empire Corporation was founded with a simple mission: to provide reliable, 
              professional building maintenance services that condominium associations can trust. 
              Based at 74 Franklin St in Allston, we've grown from a small local business to 
              the preferred maintenance partner for hundreds of buildings across the Greater Boston Area.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to excellence in every aspect of our service. 
              From our guaranteed 2-hour emergency response time to our comprehensive photo 
              documentation, we've built our reputation on reliability, transparency, and 
              professional expertise.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our team of licensed and insured professionals specializes in the unique challenges 
              of New England weather, providing everything from emergency repairs to preventive 
              maintenance programs designed to protect your investment and ensure tenant satisfaction.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure that every client 
              receives the highest level of service and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

