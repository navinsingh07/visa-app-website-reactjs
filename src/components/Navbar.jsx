import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import '../assets/styles/Navbar.css'


const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  //To change the color of navbar when scroll
  // const[color, setColor] = useState(false)
  // const changeColor = () => {
  //   if(window.scrollY >=30){
  //     setColor(true);
  //   } else {
  //     setColor(false)
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  return (
    // <nav className={color ? ' navbarItems navbarBG' : 'navbarItems'}>
    <nav className='navbarItems'>
    <Link to='/' className='navbar-logo'>Fly&Tour</Link>

    <div className="menu-icons" onClick={handleClick} >
      {click ? (<AiFillCloseCircle size={30} style={{cursor:"pointer", lineHeight:"80px"}}/>) :  (<FaBars size={30} style={{cursor:"pointer"}}/>)}
    </div>


    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/offers">Offers</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>

        <Link to="/signin" className='signBtn'>Sign in/sign up</Link>

    </ul>



    

    </nav>
  )
}

export default Navbar