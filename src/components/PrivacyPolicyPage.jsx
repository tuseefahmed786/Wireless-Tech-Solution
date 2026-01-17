import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner Section */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At Wireless Tech Solution, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our IPTV services, web development, and graphic design offerings.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Contact us through our contact forms or email</li>
                  <li>Subscribe to our services or newsletters</li>
                  <li>Request information about our IPTV, web development, or graphic design services</li>
                  <li>Create an account or register for our services</li>
                </ul>
                <p className="mt-2">This information may include your name, email address, phone number, mailing address, and any other information you choose to provide.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device identifiers and mobile network information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your requests and transactions</li>
                <li>To communicate with you about our services, updates, and promotional offers</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze website usage and trends to enhance user experience</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing and Disclosure */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, such as hosting providers, analytics services, and payment processors.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent for any other purpose.</li>
              </ul>
            </div>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device that help us improve your experience.</p>
              <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
              <p>We use cookies for:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Providing personalized content and advertisements</li>
                <li>Ensuring website security and preventing fraud</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              <p>We use industry-standard encryption technologies and secure protocols to safeguard your data. Access to personal information is restricted to authorized personnel only, and we regularly review and update our security practices.</p>
            </div>
          </div>

          {/* Your Rights and Choices */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              6. Your Rights and Choices
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to certain legal obligations.</li>
                <li><strong>Objection:</strong> You can object to processing of your personal information for certain purposes.</li>
                <li><strong>Data Portability:</strong> You may request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> If we process your information based on consent, you can withdraw it at any time.</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by Wireless Tech Solution. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Wireless Tech Solution</strong></p>
                <p>Email: <a href="mailto:wireless.solution26@gmail.com" className="text-green-600 hover:text-green-800 underline">wireless.solution26@gmail.com</a></p>
                <p>Phone: <a href="tel:+15512021201" className="text-green-600 hover:text-green-800 underline">+1 (551) 202-1201</a></p>
                <p>Address: 85 Manor Drive Apt 2M, Newark, New Jersey 07106</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default PrivacyPolicyPage

