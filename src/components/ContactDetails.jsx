const ContactDetails = () => {
  return (
    <section id="contact" className="py-20 bg-green-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Our Contact Details
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 text-white">
            {/* Left Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Wireless Tech Solution</h3>
              <div className="w-16 h-0.5 bg-white mb-4"></div>
              <p className="text-gray-300 mb-6">
                Transform your business with comprehensive digital solutions including web development, graphic design, and IPTV services. We're here to help you succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (954) 445-9604</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>wireless.solution26@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="w-16 h-0.5 bg-white mb-4"></div>
              <p className="text-gray-300 mb-6">
                24/7 Customer Support Available via WhatsApp: +1 (954) 445-9604
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-gray-300">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Saturday - Sunday</span>
                  <span className="text-gray-300">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative green drip effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-green-600" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
      }}></div>
    </section>
  )
}

export default ContactDetails

