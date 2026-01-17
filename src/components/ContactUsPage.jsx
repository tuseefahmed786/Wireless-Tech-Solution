import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('We appreciate your message! Our team will respond to you shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Dark Banner Section */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us <span className="text-green-400">Wireless Tech</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-6">
              Solutions
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our dedication lies in delivering seamless streaming experiences, immediate support, and outstanding customer care. Whether you have inquiries, require technical assistance, or wish to discover our IPTV packages, we're always available to connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Can We Do For You?
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700">85 MANOR DRIVE APTE 2M</p>
                    <p className="text-gray-700">NEWARK, NEW JERSEY 07106</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Email:</p>
                    <a href="mailto:Amircheema1265@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                      wireless.solution26@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Phone:</p>
                    <a href="tel:+19544459604" className="text-gray-700 hover:text-gray-900">
                      +1 (954) 445-9604
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us For Further Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact us For Further */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Reach Out For More Information
              </h2>
              <p className="text-red-600 font-semibold text-lg mb-6">
                Converting Concepts into Engaging Content
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Wireless Tech Solution recognizes that exceptional content serves as the foundation of every thriving digital presence. Our experienced content development team is committed to supporting you in connecting with your viewers and achieving your objectives.
                </p>
                <p>
                  At <strong>Wireless Tech Solution</strong>, we recognize that <strong>top-tier IPTV solutions</strong> depend on both cutting-edge technology and attentive, helpful customer service. Whether you're new to IPTV or currently using our platform, our team stands ready to guide you throughout your journey.
                </p>
              </div>
              <button className="mt-8 border-2 border-black bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Begin Your Project →
              </button>
            </div>

            {/* Right Column - Content Creator Portfolio Mockup */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                  wirelesstechsolutions.com
                </div>
              </div>
              <div className="p-6">
                <div className="flex">
                  <div className="w-1/4 pr-4">
                    <div className="w-12 h-12 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-1 bg-gray-200 rounded"></div>
                      <div className="h-1 bg-gray-200 rounded"></div>
                      <div className="h-1 bg-gray-200 rounded"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">CONTENT CREATOR PORTFOLIO</h3>
                    <div className="space-y-2 mb-6">
                      <div className="h-1 bg-gray-200 rounded"></div>
                      <div className="h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-24 h-8 bg-gray-800 rounded"></div>
                  </div>
                  <div className="w-3/4 grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className={`aspect-square rounded ${item % 3 === 0 ? 'bg-black' : item % 3 === 1 ? 'bg-orange-200' : 'bg-gray-100'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0">
        <div className="w-full h-[500px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2070282792292!2d-74.25107362423869!3d40.73546983617898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ac9375b312d5%3A0x625c30bbeb2cc299!2s85%20Manor%20Dr%20Apartment%202m%2C%20Newark%2C%20NJ%2007106%2C%20USA!5e0!3m2!1sen!2s!4v1768592169149!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wireless Tech Solution Location - 85 MANOR DRIVE APT 2M NEWARK NEW JERSEY 07106"
          ></iframe>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Corporate & Partnership Opportunities: Collaborate with Wireless Tech Solution to access premium streaming services.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Common Inquiries: Discover our IPTV subscription options, available channels, and service capabilities.
          </p>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default ContactUsPage

