import { 
  Wrench, 
  Zap, 
  Droplets, 
  Snowflake, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roofing Services",
      description: "Complete roofing solutions including repairs, replacements, and maintenance for all types of roofing systems.",
      features: ["Roof repairs & replacement", "Leak detection & repair", "Gutter installation", "Emergency roof services"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "HVAC Systems",
      description: "Heating, ventilation, and air conditioning services to keep your building comfortable year-round.",
      features: ["HVAC installation", "System maintenance", "Emergency repairs", "Energy efficiency upgrades"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Plumbing Services",
      description: "Full plumbing maintenance including leak prevention, repairs, and emergency plumbing services.",
      features: ["Leak detection & repair", "Pipe maintenance", "Drain cleaning", "Emergency plumbing"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Exterior & Interior Painting",
      description: "Professional painting services for both interior and exterior surfaces to maintain and beautify your property.",
      features: ["Interior painting", "Exterior painting", "Surface preparation", "Quality finishes"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Professional Cleaning",
      description: "Comprehensive cleaning services for common areas, offices, and specialized facility cleaning needs.",
      features: ["Common area cleaning", "Office cleaning", "Deep cleaning", "Specialized cleaning"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Carpentry Services",
      description: "Expert carpentry work including repairs, installations, and custom woodwork for your building needs.",
      features: ["Custom carpentry", "Repair work", "Installation services", "Finish carpentry"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Flooring Solutions",
      description: "Complete flooring services including installation, repair, and maintenance of various flooring types.",
      features: ["Floor installation", "Floor repairs", "Maintenance", "Multiple materials"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tiles & Counter Tops",
      description: "Professional installation of granite counter tops, quartz, tiles, and backsplash for kitchens and bathrooms.",
      features: ["Granite installation", "Tile work", "Backsplash installation", "Counter top repairs"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Demolition Services",
      description: "Safe and efficient demolition services following OSHA guidelines with experienced team and proper equipment.",
      features: ["Safe demolition", "OSHA compliance", "Debris removal", "Site preparation"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "General Maintenance & Repair",
      description: "Comprehensive maintenance and repair services to handle daily tasks and alleviate building management workload.",
      features: ["Preventive maintenance", "Emergency repairs", "Handyman services", "Building upkeep"]
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Seasonal Maintenance",
      description: "Specialized services for New England weather challenges including snow and ice management.",
      features: ["Winter preparation", "Ice dam prevention", "Storm damage repair", "Seasonal inspections"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Wrench className="h-4 w-4 mr-2" />
            Comprehensive Building Maintenance
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Building Services for Your Condominium
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From roofing and HVAC to painting and cleaning, we provide comprehensive building 
            services designed specifically for Boston area condominiums and commercial properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center text-red-600 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-red-600 text-red-600 hover:bg-red-50"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Maintenance Plan?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Every condominium has unique needs. Let us create a personalized maintenance 
              plan that fits your building's requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
              >
                Get Custom Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

