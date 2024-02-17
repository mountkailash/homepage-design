import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import WhatWeOfferSection from './components/WhatWeOfferSection'
import BlogsSection from './components/BlogsSection'
import LetsConnectSection from './components/LetsConnectSection'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navigation />
      <HeroSection />
      <WhatWeOfferSection />
      <BlogsSection />
      <LetsConnectSection />
      <Footer />
    </>
  )
}

export default App
