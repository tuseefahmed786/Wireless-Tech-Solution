import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const AboutUsPage = () => {
  const features = [
    'Product Quality',
    'Market Expansion',
    'Community Engagement',
    'Brand Awareness',
    'Ethical Sourcing'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Dark Banner Section */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Welcome to Wireless Tech Solution
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section with Decorative Element */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Decorative Oval Shape */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full max-w-2xl max-h-96 opacity-20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <ellipse 
                    cx="200" 
                    cy="150" 
                    rx="180" 
                    ry="120" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                We are dedicated to transforming the way people watch television by offering advanced streaming technology, stable performance, and a user-friendly experience for customers around the world.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
              >
                Contact US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section - Meet the Team */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left Column - Tech Display Panel */}
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                {/* Futuristic Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="text-cyan-400">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.8}} />
                          <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.4}} />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" />
                      <path d="M50 100 L150 100 M100 50 L100 150" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="3,3" />
                      <circle cx="100" cy="100" r="20" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Monitor Icon */}
                  <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>


                  {/* Company Name */}
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wide">
                  Wireless Tech Solution
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-300 text-sm md:text-base">
                    ULTRA HD IPTV SOLUTIONS
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Team Information */}
            <div className="order-1 md:order-2">
              <div className="mb-4">
                <span className="text-green-500 text-sm md:text-base font-medium">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Meet the Team Behind Your Entertainment Media
              </h2>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                Meet our dedicated team of technology specialists and entertainment experts, committed to providing the best streaming solutions for your viewing needs. We combine innovation with reliability to deliver exceptional IPTV services.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-base md:text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <a 
                href="/about"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section with Dark Background */}
      <section className="py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-green-400 text-sm md:text-base font-medium">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Meet the Team Behind
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our passionate team of experts is dedicated to delivering cutting-edge IPTV solutions that transform your entertainment experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default AboutUsPage

