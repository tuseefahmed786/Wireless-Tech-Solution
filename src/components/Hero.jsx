const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Revolutionize Your Viewing Experience with Premium IPTV Services
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-3">
          Access over 1,500 HD & SD live channels streaming from Europe, USA, UAE, and countries worldwide.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8">
          Dependable IPTV platform featuring HD quality and lightning-fast streaming with 50,000+ on-demand titles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/web-development" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Explore Services
          </a>
          <a href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

