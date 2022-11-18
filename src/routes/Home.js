import React from 'react'
import VisaSteps from '../components/Home/VisaSteps'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Accordin from '../components/Home/Accordin'
import Slider from '../components/Home/Slider'
import ChooseUs from '../components/Home/ChooseUs'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <VisaSteps />
    <Slider />
    <ChooseUs />
    <Accordin />
    <Footer />
    </>
  )
}

export default Home