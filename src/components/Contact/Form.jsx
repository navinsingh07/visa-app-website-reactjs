import React from 'react'
import './styles/Form.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Form = () => {
  return (
    <>
            <div className="contact-content">
            <h1>Connect with Us</h1>

            <div className='icons'>
            <BsFillTelephoneFill style={{color:"#409bff", fontSize:"20px"}} />
            <p>9560871602</p>
            </div>
            <div className='icons'>
            <MdEmail style={{color:"#409bff", fontSize:"20px"}} />
            <p>neginavin99@gmail.com</p>
            </div>

            <h5>Or Leave A Message For Us! <br /> We Will Connect With You Shortly! 😉 </h5>



            </div>



        <div className="main-form">

  
        <form>
          <label>Name:</label>
          <input type="text" />

          <label>Email:</label>
          <input type="text" />

          <label>Phone Number:</label>
          <input type="number" />

          <label>Message:</label>
          <textarea rows={8} cols={85} />


          <button>Submit</button>
        </form>

        </div>
    </>
  )
}

export default Form