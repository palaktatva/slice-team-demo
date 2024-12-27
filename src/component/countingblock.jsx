import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import star_icon from '../assets/images/star-icon.svg';
import counting_block_img from '../assets/images/counting-block-img.jpg';
import { Navigation } from 'swiper/modules';

const Countingblock = () => {
  return (
    <section className="counting-section">
        <div className="container">
            <div className="counting-block">
                <div className="image-block"><img src={counting_block_img} alt="counting-block-img"/></div>
                <div className="content-block">
                        <h2>Weve stopped counting. Over 500 brands count on us.</h2>
                        <span>Our 4,000+ team has expertise in almost everyprogramming language.</span>
                </div>
            </div>
            <div className="swipper-block">
              <Swiper              
              spaceBetween={38}
              slidesPerView={3.5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={true} modules={[Navigation]}
              
              >
                  <SwiperSlide>
                    <div className="rating-block">
                        <ul className='ratting'>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                        </ul>
                         <div className="ratting-content-block">
                            <h3>“An overall wonderful and rewarding experience”</h3>
                            <div className="ratting-content">
                                <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                         </div>
                         <div className="name-block">
                            <span>Mary Johnson</span>
                            <p>CEO of TechCraft Solutions</p>
                         </div>
                    </div>
                  </SwiperSlide>                       
                  <SwiperSlide>
                    <div className="rating-block">
                        <ul className='ratting'>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                        </ul>
                         <div className="ratting-content-block">
                            <h3>“An overall wonderful and rewarding experience”</h3>
                            <div className="ratting-content">
                                <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                         </div>
                         <div className="name-block">
                            <span>Mary Johnson</span>
                            <p>CEO of TechCraft Solutions</p>
                         </div>
                    </div>
                  </SwiperSlide>                       
                  <SwiperSlide>
                    <div className="rating-block">
                        <ul className='ratting'>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                        </ul>
                         <div className="ratting-content-block">
                            <h3>“An overall wonderful and rewarding experience”</h3>
                            <div className="ratting-content">
                                <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                         </div>
                         <div className="name-block">
                            <span>Mary Johnson</span>
                            <p>CEO of TechCraft Solutions</p>
                         </div>
                    </div>
                  </SwiperSlide>                       
                  <SwiperSlide>
                    <div className="rating-block">
                        <ul className='ratting'>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                        </ul>
                         <div className="ratting-content-block">
                            <h3>“An overall wonderful and rewarding experience”</h3>
                            <div className="ratting-content">
                                <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                         </div>
                         <div className="name-block">
                            <span>Mary Johnson</span>
                            <p>CEO of TechCraft Solutions</p>
                         </div>
                    </div>
                  </SwiperSlide>                       
                  <SwiperSlide>
                    <div className="rating-block">
                        <ul className='ratting'>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                            <li><em><img src={star_icon} alt="star-icon"/></em></li>
                        </ul>
                         <div className="ratting-content-block">
                            <h3>“An overall wonderful and rewarding experience”</h3>
                            <div className="ratting-content">
                                <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                         </div>
                         <div className="name-block">
                            <span>Mary Johnson</span>
                            <p>CEO of TechCraft Solutions</p>
                         </div>
                    </div>
                  </SwiperSlide>                       
              </Swiper>                 
            </div>
        </div>
    </section>
  )
}

export default Countingblock