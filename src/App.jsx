import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/src/assets/empire-logo.png" 
                alt="Empire Corporation" 
                className="h-12 w-auto max-w-[200px]"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
              <a href="tel:781-957-5684" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium">
                Call (781) 957-5684
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional Building Maintenance Services in Boston & Greater Boston Area
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive maintenance solutions for condominiums and commercial buildings. 
              From emergency repairs to preventive maintenance - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:781-957-5684" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg">
                Emergency Service: (781) 957-5684
              </a>
              <a href="mailto:contact@empireccorp.com" className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg">
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete building maintenance solutions for your property</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roofing Services", desc: "Complete roof installation, repair, and maintenance" },
              { title: "HVAC Systems", desc: "Heating, ventilation, and air conditioning services" },
              { title: "Plumbing Services", desc: "Professional plumbing installation and repairs" },
              { title: "Electrical Work", desc: "Licensed electrical services and installations" },
              { title: "Painting Services", desc: "Interior and exterior painting for all buildings" },
              { title: "General Maintenance", desc: "Comprehensive building maintenance and repairs" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Empire Corporation</h2>
            <p className="text-xl text-gray-600 mb-8">
              Located at 74 Franklin St in Allston, Empire Corporation has been providing 
              comprehensive building maintenance services to the Greater Boston Area for over 12 years.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "120+", label: "Services Completed" },
                { number: "12+", label: "Years Experience" },
                { number: "24/7", label: "Emergency Service" },
                { number: "100%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Empire Corporation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-blue-300">(781) 957-5684</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-300">contact@empireccorp.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-blue-300">74 Franklin St, Allston, MA</p>
              </div>
            </div>
            <a href="tel:781-957-5684" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 font-semibold text-lg inline-block">
              Call Now for Emergency Service
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Empire Corporation. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Professional Building Maintenance Services - Boston & Greater Boston Area</p>
        </div>
      </footer>
    </div>
  )
}

export default App

