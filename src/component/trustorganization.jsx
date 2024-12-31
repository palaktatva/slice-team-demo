import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import samsang_logo from '../assets/images/samsang-logo.svg';
import microsoft_logo from '../assets/images/microsoft-logo.svg';
import google_logo from '../assets/images/google-logo.svg';
import slack_logo from '../assets/images/slack-logo.svg';
import lg_logo from '../assets/images/lg-logo.svg';
import sony_logo from '../assets/images/sony-logo.svg';

const Trustorganization = () => {
  return (
    <section className='trust-organization-section'>
        <div className="container">
        <div className="trust-organization-block">
          <div className="title-block">
                  <h2>Trusted by Leading Organizations</h2> 
                  <span>Our 4,000+ team has expertise in almost everyprogramming lang uage.</span>
              </div>
              <Swiper
              className='swipper-block'
              spaceBetween={107}
              slidesPerView={5.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >
                  <SwiperSlide><div className="image-block"><img src={samsang_logo} alt="samsang_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={microsoft_logo} alt="microsoft_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={google_logo} alt="google_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={slack_logo} alt="slack_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={lg_logo} alt="lg_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={sony_logo} alt="sony_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={google_logo} alt="google_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={slack_logo} alt="slack_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={lg_logo} alt="lg_logo" /></div></SwiperSlide>                
                  <SwiperSlide><div className="image-block"><img src={sony_logo} alt="sony_logo" /></div></SwiperSlide>                
              </Swiper>
          </div>          
        </div>        
    </section>
  )
}

export default Trustorganization