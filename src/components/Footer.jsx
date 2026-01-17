const Footer = () => {
  return (
    <footer className="bg-green-600 text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-green-200 hover:text-white">Home</a>
              <a href="/web-development" className="block text-green-200 hover:text-white">Web Development</a>
              <a href="/graphic-design" className="block text-green-200 hover:text-white">Graphic Design</a>
              <a href="/about" className="block text-green-200 hover:text-white">About Us</a>
              <a href="/contact" className="block text-green-200 hover:text-white">Contact US</a>
            </div>
          </div>

          {/* Logo and Contact Button */}
          <div className="flex flex-col items-center space-y-4">
            <a href="/" className="text-white font-bold text-sm md:text-base text-center">
              Wireless Tech Solution
            </a>
            <a href="/contact" className="border-2 border-white bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block text-center">
              CONTACT US
            </a>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-green-200 leading-relaxed">
              Our commitment focuses on delivering premium IPTV services that enable you to experience uninterrupted entertainment and fulfill your streaming requirements. Our IPTV platforms are engineered to provide rapid, dependable, and crystal-clear streaming, ensuring a flawless viewing experience on every device you use.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>wireless.solution26@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (551) 202-1201</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-green-200 text-sm">
                Copyright © 2020-2026 Wireless Tech Solution. Copyright
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

