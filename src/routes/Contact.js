import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/Contact/ContactHero'
import Form from '../components/Contact/Form'
import Footer from '../components/Footer.jsx'


const Contact = () => {
  return (
    <>
        <Navbar />
        <ContactHero />
        <Form />
        <Footer />
    </>
  )
}

export default Contact