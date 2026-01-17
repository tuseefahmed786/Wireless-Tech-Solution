const EntertainmentIntegration = () => {
  const logos = [
    { name: "NETFLIX", color: "text-red-600" },
    { name: "prime video", color: "text-blue-600" },
    { name: "WIRELESS TECH SOLUTION", color: "text-gray-700" },
    { name: "FANDOR", color: "text-gray-800" },
    { name: "Disney+", color: "text-blue-500" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          Seamlessly Integrated with Your Favorite Entertainment Platforms
        </h2>
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
            <div className="w-32 h-1 bg-blue-500 ml-2"></div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 mb-16">
          {logos.map((logo, index) => (
            <div key={index} className={`text-xl md:text-2xl lg:text-3xl font-bold ${logo.color} flex-shrink-0`}>
              {logo.name === "WIRELESS TECH SOLUTION" ? (
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-gray-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xs md:text-sm">WTS</span>
                  </div>
                  <div>
                    <div className="text-gray-700 text-base md:text-lg">WIRELESS TECH</div>
                    <div className="text-xs md:text-sm text-gray-600">SOLUTION</div>
                  </div>
                </div>
              ) : logo.name === "NETFLIX" ? (
                <span className="text-red-600">NETFLIX</span>
              ) : logo.name === "prime video" ? (
                <div className="text-left">
                  <div className="text-blue-600">prime</div>
                  <div className="text-blue-400">video</div>
                </div>
              ) : logo.name === "FANDOR" ? (
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 border-2 border-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-sm">F</span>
                  </div>
                  <div>
                    <div className="text-gray-800">FANDOR</div>
                    <div className="text-xs text-gray-600">All for film.</div>
                  </div>
                </div>
              ) : (
                <span className="text-blue-500">Disney+</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EntertainmentIntegration

