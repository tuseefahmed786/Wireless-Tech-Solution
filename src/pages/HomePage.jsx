import Header from '../components/Header'
import Hero from '../components/Hero'
import IPTVFeatures from '../components/IPTVFeatures'
import EntertainmentIntegration from '../components/EntertainmentIntegration'
import OurServices from '../components/OurServices'
import WhatWeDo from '../components/WhatWeDo'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <IPTVFeatures />
      <EntertainmentIntegration />
      <OurServices />
      <WhatWeDo />
      <ContactDetails />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage

