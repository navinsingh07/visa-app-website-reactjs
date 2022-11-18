import React from 'react'
import './Signin.css'

const SigninForm = () => {
  return (
    <>
        <div className="signInSection">
        <div className='loginHeader'>
            <h1>Welcome!</h1>
            <h1>Are You Ready To Fly! ✈️ </h1>
        </div>

        <div className="loginform">
        <h3>Log In</h3>
                <form className='loginForm'>
                  <input type="email" placeholder='Email id*'/> <br/>
                  <input type="password" placeholder='Password*' />
                  <button style={{fontSize:"16px", width:"100%", padding:"10px 0 10px 0", fontWeight:"600"}}>Log in</button>
                </form>
                <span className='bar' ></span>
                <div className="signupClick">
                  <a href="/signup">New to F&T Click here to SignUp</a>
                </div>
        </div>



    </div>
    </>
  )
}

export default SigninForm