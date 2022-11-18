import React from 'react'
import '../Home/style/VisaStep.css'
import img1 from '../../assets/images/visa_steps/visa_steps_1.svg'
import img2 from '../../assets/images/visa_steps/visa_steps_2.svg'
import img3 from '../../assets/images/visa_steps/visa_steps_3.svg'
import img4 from '../../assets/images/visa_steps/visa_steps_4.svg'

const VisaSteps = () => {

  const steps = [
    {
      img:img1,
      head:"Book Visa Online",
      para:"Simplest way to apply visa online."
    },
    {
      img:img2,
      head:"Document Validation",
      para:"Our visa expert will collect & verify your documents."
    },
    {
      img:img3,
      head:"Visa Processing",
      para:"We schedule documents submission, biometric / interview"
    },
    {
      img:img4,
      head:"Visa at Doorstep",
      para:"Passport gets delivered at your doorstep"
    },
  ]


  return (
    <>

      <h3 className='visaHeading'>Apply Visa Online In 4 Simple Steps</h3>

      <div className='card-menu'>
      {steps.map((steps) =>
        
          <div className="card" key={steps.head}>
              <img src={steps.img} alt="img1" srcset="" />
              <h5 className='heading'>{steps.head}</h5>
              <p className='card-para'>{steps.para}</p>
          </div>
        
        )}

        </div>

      
    </>
  )
}

export default VisaSteps