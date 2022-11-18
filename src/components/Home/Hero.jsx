import React from 'react'
import './style/HeroStyles.css'
import img1 from '../../assets/images/img14.jpg'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img alt='heroImg' src={img1}/>
        <div className="hero-text">
        <h1>Apply Visa In A Simple Way </h1>
        <p>Be Ready To Fly</p>
        <a className='btn' href="/">Get Started</a>
        </div>
      </div>
    </>
  )
}

export default Hero