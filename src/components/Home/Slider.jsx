import React from 'react'
import '../Home/style/Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import img1 from '../../assets/images/slider/img1.jpg'
import img2 from '../../assets/images/slider/img2.jpg'
import img3 from '../../assets/images/slider/img3.jpg'
import img4 from '../../assets/images/slider/img4.jpg'


const Slider = () => {

    const reviews =[
        {
            img:img2,
            name:"Rahul Bhargava",
            rating:"⭐⭐⭐⭐⭐",
            review:"Agent visited my home and helped me in arranging all my documents, makes my visa applying experence quite easy",
        },
        {
            img:img1,
            name:"Bhavya Raheja",
            rating:"⭐⭐⭐⭐⭐",
            review:"The agents are punctual and professional. They asssited me throughout the application process and even filed it on my behalf to the embassy.",
        },
        {
            img:img3,
            name:"Simran Kukreja",
            rating:"⭐⭐⭐⭐⭐",
            review:"visa application process was very easy and convinient as the agent visited my office and did all the work on my behalf.",
        },
        {
            img:img4,
            name:"Amit patel",
            rating:"⭐⭐⭐⭐⭐",
            review:"This was the smoothest visa application process for tourist visa I have ever had.",
        },
    ]






  return (
    <>

      <h1 className='slider-heading'>What People Say About Us</h1>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
            {reviews.map((reviews => 
            <SwiperSlide key={reviews.name}>
            <img src={reviews.img} alt="display-pic"/>
            <h3>{reviews.name}</h3>
            <p>{reviews.rating}</p>
            <p>{reviews.review}</p>
            </SwiperSlide>
            ))}
       
      </Swiper>

    </>
  )
}

export default Slider