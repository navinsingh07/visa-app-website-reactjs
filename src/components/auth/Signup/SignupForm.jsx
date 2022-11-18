import React from 'react'
import './SignupForm.css'

const SignupForm = () => {
  return (
    <>
       <div className="signupSection">
        <div className='signupHeader'>
            <h1>Welcome to Fly&Tour</h1>
            <h1>Fastest, Reliable, Trusted  <br /> 😃  </h1>
        </div>

        <div className="signupform">
        <h3>Sign Up in Simple Steps</h3>
                <form className='signupForm'>
                  <input type="text" placeholder='Full Name*'/> <br/>
                  <input type="email" placeholder='Email*' /> <br />
                  <input type="number" placeholder='Phone Number*' />
                  <button style={{fontSize:"16px", width:"100%", padding:"10px 0 10px 0", fontWeight:"600"}}>Sign Up</button>
                </form>
                <span className='bar' ></span>
                <div className="signupClick">
                  <a href="/signin">Already a User? Click here</a>
                </div>
        </div>



    </div>
    </>
  )
}

export default SignupForm