import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'
  const isPrivacyPage = location.pathname === '/privacy-policy'
  const isAboutPage = location.pathname === '/about'
  const isWebDevPage = location.pathname === '/web-development'
  const isGraphicDesignPage = location.pathname === '/graphic-design'

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="text-green-400 font-bold text-lg">Wireless Tech Solution</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-green-400 hover:text-green-300 font-medium">
              Home
            </a>
            <a href="/web-development" className={`${isWebDevPage ? 'text-green-400' : 'hover:text-green-400'} font-medium`}>
              Web Development
            </a>
            <a href="/graphic-design" className={`${isGraphicDesignPage ? 'text-green-400' : 'hover:text-green-400'} font-medium`}>
              Graphic Design
            </a>
            <a href="/about" className={`${isAboutPage ? 'text-green-400' : 'hover:text-green-400'} font-medium`}>
              About Us
            </a>
            <a href="/contact" className={`${isContactPage ? 'text-green-400' : 'hover:text-green-400'} font-medium`}>
              Contact US
            </a>
          </nav>

          {/* Privacy Policy Button */}
          <a href="/privacy-policy" className={`hidden md:block px-6 py-2 rounded-lg font-medium transition-colors ${isPrivacyPage ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'} text-white`}>
            Privacy Policy
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="/" className={`block ${location.pathname === '/' ? 'text-green-400' : ''} py-2`}>Home</a>
            <a href="/web-development" className={`block ${isWebDevPage ? 'text-green-400' : ''} py-2`}>Web Development</a>
            <a href="/graphic-design" className={`block ${isGraphicDesignPage ? 'text-green-400' : ''} py-2`}>Graphic Design</a>
            <a href="/about" className={`block ${isAboutPage ? 'text-green-400' : ''} py-2`}>About Us</a>
            <a href="/contact" className={`block ${isContactPage ? 'text-green-400' : ''} py-2`}>Contact US</a>
            <a href="/privacy-policy" className={`block w-full ${isPrivacyPage ? 'bg-green-600' : 'bg-green-500'} text-white px-6 py-2 rounded-lg font-medium mt-2 text-center`}>
              Privacy Policy
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

