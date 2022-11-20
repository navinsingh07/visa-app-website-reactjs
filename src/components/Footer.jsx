import React from 'react'
import '../assets/styles/Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="top">

            <div className='intro'>
                <h1>Fly&Tour</h1>
                <p>
                Fly&Tour is an online visa application platform that is dedicated to easing the lives of travellers. We simplify the way you book your visa application. Whether it is a transit, tourist or business visa, we guide you from start to end to ensure maximum success of getting your visa on time.
                </p>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>PRODUCTS</h4>
                <a href="/">Visa</a>
                <a href="/">Insurance</a>
            </div>
            <div>
                <h4>Useful Links</h4>
                <a href="/">About Us</a>
                <a href="/">Blog</a>
                <a href="/">Social Media</a>
                <a href="/">Offers</a>
            </div>

            <div>
            <h4>OTHER LINKS</h4>
                <a href="/">terms & Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Cookie Policy</a>
                
                
            </div>
        </div>


        </div>
    </>
  )
}

export default Footer