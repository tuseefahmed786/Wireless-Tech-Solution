import { useState } from 'react'

const WhatWeDo = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is Custom Web Design?",
      answer: "Custom web design involves creating unique, tailored websites specifically crafted to meet your business goals and audience expectations. Our approach combines strategic design elements—including carefully selected visuals, color schemes, typography, and interactive features—that engage visitors and encourage return visits. Custom web design is essential for businesses looking to stand out, build credibility, and drive growth in today's competitive digital landscape. Investing in professional web design enhances user experience through improved interface design, optimized performance, and seamless functionality."
    },
    {
      question: "What is Ecommerce Web Design?",
      answer: "Ecommerce web design specializes in building online stores that prioritize user experience, security, and sales conversion. Our ecommerce solutions include intuitive product catalogs, streamlined shopping carts, secure payment gateways, and optimized checkout processes—all designed to maximize your online sales and customer satisfaction."
    },
    {
      question: "How Do I Customize My Website Design?",
      answer: "Our customization process begins with a collaborative consultation where we understand your brand identity, business objectives, and target audience. Together, we'll select color palettes, layout structures, typography, and interactive features that perfectly align with your brand. We provide multiple design concepts and work closely with you to refine every detail until your vision comes to life."
    },
    {
      question: "Do You Provide Web Designs for Multiple Platforms?",
      answer: "Absolutely! We offer web design services across a wide range of platforms including WordPress, Shopify, WooCommerce, custom React and Vue.js applications, and more. Our team will recommend and work with the platform that best fits your business needs, budget, and long-term goals."
    },
    {
      question: "Will You Maintain My Website for Me?",
      answer: "Yes, we provide comprehensive website maintenance services to ensure your site remains current, secure, and performing optimally. Our maintenance packages include regular software updates, automated backups, security monitoring and patches, content updates, performance optimization, and technical support."
    },
    {
      question: "Do You Optimize Web Pages for Mobile Phones?",
      answer: "Absolutely! All our web designs are fully responsive and optimized for mobile devices. We ensure your website looks great and functions perfectly on smartphones, tablets, and desktops."
    },
    {
      question: "Do You Provide a Contact Form with the Basic Package?",
      answer: "Yes, contact forms are included in our basic web design packages. We can customize the form fields and styling to match your specific needs."
    },
    {
      question: "Do You Offer SEO and Performance Optimization Services?",
      answer: "Yes, we offer comprehensive SEO and performance optimization services to improve your website's search engine rankings and loading speeds. This includes keyword optimization, meta tags, image optimization, and more."
    },
    {
      question: "Can You Do Branding and Promotion Designs for My Brand and Website?",
      answer: "Yes, we provide complete branding services including logo design, color schemes, typography, and promotional materials. We can create a cohesive brand identity across all your marketing materials."
    },
    {
      question: "How Does Your Web Design Process Meet My Requirements?",
      answer: "Our web design process starts with a consultation to understand your business goals, target audience, and specific requirements. We then create custom designs, gather feedback, and iterate until we meet your exact needs."
    },
    {
      question: "What to look for in professional web design services?",
      answer: "When looking for professional web design services, consider their portfolio, experience with your industry, responsiveness, communication skills, pricing transparency, and post-launch support. Look for a team that understands your business goals."
    },
    {
      question: "Why is it necessary to hire a web design agency?",
      answer: "Hiring a web design agency ensures you get a professional, polished website that represents your brand effectively. Agencies bring expertise in design, development, SEO, and user experience that can significantly impact your online presence and business growth."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">What We Do</h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Transform your brand with distinctive style and identity through Wireless Tech Solution
          </p>
          <p className="text-lg font-bold text-gray-900">Your trusted digital solutions partner.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-indigo-700 font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

