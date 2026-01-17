import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactUsPage from './components/ContactUsPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import AboutUsPage from './components/AboutUsPage'
import WebDevelopmentPage from './components/WebDevelopmentPage'
import GraphicDesignPage from './components/GraphicDesignPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
      </Routes>
    </Router>
  )
}

export default App

