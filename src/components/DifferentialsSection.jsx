import { 
  Clock, 
  Settings, 
  Snowflake, 
  Users, 
  Camera,
  Shield,
  CheckCircle,
  Star
} from 'lucide-react'

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Clock className="h-12 w-12" />,
      title: "2-Hour Emergency Response",
      subtitle: "Guaranteed Response Time",
      description: "When emergencies strike, every minute counts. Our team guarantees a response within 2 hours for all emergency maintenance requests, 24/7.",
      features: [
        "24/7 emergency hotline",
        "2-hour response guarantee",
        "Emergency repair protocols",
        "Rapid mobilization team"
      ],
      color: "red"
    },
    {
      icon: <Snowflake className="h-12 w-12" />,
      title: "New England Weather Experts",
      subtitle: "Climate-Specific Solutions",
      description: "We understand the unique challenges of New England weather. Our specialized solutions address snow, ice, storms, and seasonal maintenance needs specific to the Boston area.",
      features: [
        "Winter preparation services",
        "Ice dam prevention",
        "Storm damage response",
        "Seasonal maintenance plans"
      ],
      color: "cyan"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Personalized Service Plans",
      subtitle: "Tailored to Your Building",
      description: "Every condominium is unique. We create customized maintenance plans that address your specific building needs, budget, and priorities.",
      features: [
        "Custom maintenance schedules",
        "Budget-friendly options",
        "Flexible service packages",
        "Scalable solutions"
      ],
      color: "green"
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Complete Transparency",
      subtitle: "Photo Documentation & Guarantees",
      description: "We document every service with detailed photos and reports. Our transparent approach includes clear pricing, detailed estimates, and satisfaction guarantees.",
      features: [
        "Before/after photos",
        "Detailed service reports",
        "Transparent pricing",
        "Satisfaction guarantee"
      ],
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        accent: "bg-red-600"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600"
      },
      cyan: {
        bg: "bg-cyan-100",
        text: "text-cyan-600",
        border: "border-cyan-200",
        accent: "bg-cyan-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600"
      }
    }
    return colorMap[color]
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Why Choose Empire Corporation
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            4 Key Advantages That Set Us Apart
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed our services specifically for Boston area condominiums, 
            addressing the unique challenges and needs of building maintenance in our region.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {differentials.map((differential, index) => {
            const colors = getColorClasses(differential.color)
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`${colors.bg} p-4 rounded-xl ${colors.text} flex-shrink-0`}>
                    {differential.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {differential.title}
                      </h3>
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {differential.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {differential.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {differential.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Boston Area Condominiums
            </h3>
            <p className="text-gray-600">
              Join hundreds of satisfied condominium associations across the Greater Boston Area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">500+</div>
              <div className="text-sm text-gray-600">Buildings Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">2hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentialsSection

