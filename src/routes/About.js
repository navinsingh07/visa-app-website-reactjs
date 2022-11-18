import React from 'react'
import AboutPage from '../components/About/AboutPage'
import HeroImg from '../components/About/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
        <Navbar />
        <HeroImg />
        <AboutPage />
        <Footer />
    </>
  )
}

export default About