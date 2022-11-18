import React from 'react'
import { Link } from 'react-router-dom'
import './AuthNavbar.css'

const AuthNavbar = () => {

  return (
    <>    <nav className="navbarItemsAuth">
    <Link to='/' className='navbar-logo-2'>Fly&Tour</Link>

    <div className='navbarItemsAuth-p'>
    <p>Be A Part of our Journey!!</p>
    </div>
    </nav>
    </>

  )
}

export default AuthNavbar