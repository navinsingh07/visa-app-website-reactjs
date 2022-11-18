import React from 'react'
import './ChooseUs.css'
import wcu1 from '../../assets/images/Home/why_choose_us_1.png'
import wcu2 from '../../assets/images/Home/why_choose_us_2.png'
import wcu3 from '../../assets/images/Home/why_choose_us_3.png'
import wcu4 from '../../assets/images/Home/why_choose_us_4.png'

const ChooseUs = () => {



    const wcuSteps = [
        {
          img:wcu1,
          head:"Book Visa Online",
          para:"Simplest way to apply visa online."
        },
        {
          img:wcu2,
          head:"Document Validation",
          para:"Our visa expert will collect & verify your documents."
        },
        {
          img:wcu3,
          head:"Visa Processing",
          para:"We schedule documents submission, biometric / interview"
        },
        {
          img:wcu4,
          head:"Visa at Doorstep",
          para:"Passport gets delivered at your doorstep"
        },
      ]
  return (
    <>

        <h1 className='wcu-Heading'>Why Choose Us?</h1>

        <div className='Why-choose-us'> 
          {wcuSteps.map(wcuSteps =>(  
       
            <div className='Wcu'>
                <img src={wcuSteps.img} alt="wcu" />    
                <h5 className='heading-wcu'>{wcuSteps.head}</h5>
                <p className='para-wcu'>{wcuSteps.para}</p>
            </div>
        ))}
        </div>
    </>
  )
}

export default ChooseUs