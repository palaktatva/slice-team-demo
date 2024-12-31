import React from 'react'
import bannerJpg from '../assets/images/banner-career.jpg';
import Button from '@mui/material/Button';

const Banner = () => {
  return (
    <section className='banner-section'>
            <div className="banner-image-block">
                <img src={bannerJpg} alt="banner-img" />
            </div>
            <div className="container">                
                  <div className="banner-content-block">
                      <span>Client story</span>   
                      <h1>Research and Analytics </h1>
                      <div className="content">
                         <p>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever,,,,</p>
                      </div>  
                       {/* <a href="#" title="Talk to our Experts" className="btn yellow-btn">Talk to our Experts</a> */}
                       <Button variant="contained" className='btn yellow-btn'>Talk to our Experts</Button>
                  </div>
            </div>
        </section>
  )
}

export default Banner