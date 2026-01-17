const OurServices = () => {
  const services = [
    {
      title: "Domain & Hosting",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
    },
    {
      title: "Content Writing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
    },
    {
      title: "Graphic Design",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop"
    },
    {
      title: "SEO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
    },
    {
      title: "Existing Portals",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      title: "E-Commerce Solution",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="underline">Our Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive digital solutions to elevate your business and enhance your online presence
          </p>
          <div className="flex items-center justify-center">
            <div className="w-1 h-1 bg-black rounded-full mx-1"></div>
            <div className="w-1 h-1 bg-black rounded-full mx-1"></div>
            <div className="w-1 h-1 bg-black rounded-full mx-1"></div>
            <div className="w-12 md:w-16 h-0.5 bg-black ml-2"></div>
            <div className="w-6 md:w-8 h-0.5 bg-black ml-1"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(service.title)
                  }}
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-gray-800 font-semibold text-center text-sm md:text-base">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

