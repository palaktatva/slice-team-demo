import React from 'react'
import getStarted_img from '../assets/images/getstarted-img.png';
const GetStarted = () => {
  return (
   <section className="getstarted-section">
        <div className="container">
            <div className="getstarted-block">
                <h2>Lorem Ipsum is simply dummy text of industry. Lets Get Started!</h2>
                <div className="button-wrapper">
                    <a href="#" className='white-btn'>Schedule a Call</a>
                </div>
                <div className="image-block">
                    <img src={getStarted_img} alt="getStarted-img" />
                </div>
            </div>
            
        </div>
   </section>
  )
}

export default GetStarted