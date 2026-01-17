# Wireless Tech Solution - Website

A modern React.js website built with Tailwind CSS, replicating the Wireless Tech Solution website design.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Smooth scrolling and animations
- Interactive FAQ accordion
- Scroll to top functionality
- Mobile-friendly navigation
- Contact Us page with form and Google Maps integration
- React Router for navigation between pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── Hero.jsx             # Hero section
│   ├── IPTVFeatures.jsx     # IPTV features section
│   ├── EntertainmentIntegration.jsx  # Entertainment logos section
│   ├── OurServices.jsx      # Services grid
│   ├── WhatWeDo.jsx         # FAQ accordion
│   ├── ContactDetails.jsx   # Contact information
│   ├── ContactUsPage.jsx    # Contact Us page
│   ├── PrivacyPolicyPage.jsx # Privacy Policy page
│   ├── Footer.jsx           # Footer section
│   └── ScrollToTop.jsx      # Scroll to top button
├── pages/
│   └── HomePage.jsx         # Home page component
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Pages

- **Home Page** (`/`): Main landing page with all sections
- **Contact Us Page** (`/contact`): Dedicated contact page with form and map
- **Privacy Policy Page** (`/privacy-policy`): Privacy policy and data handling information

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Hooks

## Customization

You can customize colors, fonts, and other design elements in `tailwind.config.js`.

## License

This project is created for Wireless Tech Solution.

