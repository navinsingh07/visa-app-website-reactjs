import React from 'react'
import './OffersCard.css'
import offer1 from '../../assets/images/Offers/v2f-250-card-banner.png'
import offer2 from '../../assets/images/Offers/mobikwik-cashback350-card-banner.png'
import offer3 from '../../assets/images/Offers/ola-money-flat10-card-banner.png'

const OffersCard = () => {

    const offerDetails = [
        {
            'img':offer1,
            'Vdate':'Offer Till: 31 December 2022',
            'heading':'Get Flat ₹400 Off On Transaction ₹6000 & Above In Visa Services',
            'data':'Bid your final goodbye to Autumn. For every visa booking of ₹6000 and Above, you redeem a discount of ₹400. Check out all our Visa Packages, before time runs out.',
        },
        {
            'img':offer2,
            'Vdate':'Offer Till: 31 December 2022',
            'heading':'Get 5% Back Up to ₹350 on Minimum Booking of ₹6000  with T&C',
            'data':'Big Pockets, Bigger Rewards! Use your Mobikwik Wallet to celebrate upto ₹350 of savings. Tap the Banner for exclusive deals. Happy Journey! give your hectic schedules a break.',
        },
        {
            'img':offer3,
            'Vdate':'Offer Till: 31 December 2022',
            'heading':'Get 10% Back Up to ₹500 on Minimum Booking of ₹4999  with T&C',
            'data':'Just extended unmissable reasons to give your hectic schedules a break. Ola Money Rewards to avail flat 10% cashback up to 500 on minimum order value of ₹4999. So, hurry Up!',
        },
    ]




  return (
    <>

        <h1 className='offer-Heading'>Fly&Tour Offers</h1>
        <div className='offers-card-panel'>

            
            {offerDetails.map(offerDetails => (
             <div className="main-card">
                    <img src={offerDetails.img} alt="banner1" className='main-card-img' />
                <div className='main-card-data'>
                    <p className='offersDate'>{offerDetails.Vdate}</p>
                    <h3 className='offersHead'>{offerDetails.heading}</h3>
                    <p className='offersData'>{offerDetails.data}</p>
                </div>
                <button className='main-card-btn'>Get Started</button>
             </div>   
             ))} 
        </div>

    </>
  )
}

export default OffersCard