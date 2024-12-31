import React from 'react'
import Button from '@mui/material/Button';
import gridImg_1 from '../assets/images/grid-img-1.jpg';
import gridImg_2 from '../assets/images/grid-img-2.jpg';
import gridImg_3 from '../assets/images/grid-img-3.jpg';
import gridImg_4 from '../assets/images/grid-img-4.jpg';
import gridImg_5 from '../assets/images/grid-img-5.jpg';
import gridImg_6 from '../assets/images/grid-img-6.jpg';
import gridImg_7 from '../assets/images/grid-img-7.jpg';

const WhatWeOfferGrid = () => {
  return (
    <div className="what-we-offer-section">
        <div className="container">
            <div className="title-block">
            <h2>What we offer</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
            </div>
            <div className="what-we-offer-grid">
                <div className="grib-block has-col-2">
                    <div className="grib-inner-block">
                        <div className="background-img">
                            <img src={gridImg_1} alt="grid-baground-img" />
                        </div>
                        <div className="grid-content align-item-center">
                            <h3>Lipsum generator: Lorem Ipsum</h3>
                            <div className="content">
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grib-block">
                 <div className="grib-inner-block">
                    <div className="background-img">
                    <img src={gridImg_2} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content has-white-text">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                 </div>
                </div>
                <div className="grib-block">
                  <div className="grib-inner-block">
                    <div className="background-img">
                     <img src={gridImg_3} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content align-item-start">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="grib-block">
                  <div className="grib-inner-block">
                    <div className="background-img">
                     <img src={gridImg_4} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="grib-block">
                  <div className="grib-inner-block">
                    <div className="background-img">
                      <img src={gridImg_5} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="grib-block">
                  <div className="grib-inner-block">
                    <div className="background-img">
                       <img src={gridImg_6} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content has-white-text">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="grib-block has-col-2 ">
                  <div className="grib-inner-block">
                    <div className="background-img">
                        <img src={gridImg_7} alt="grid-baground-img" />
                    </div>
                    <div className="grid-content align-item-center">
                        <h3>Lipsum generator: Lorem Ipsum</h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ..</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>    
            <div className="button-wrapper">
                <Button variant="outlined" className='btn'>Submit Your Request</Button>
                <Button variant="outlined" className='btn blue-btn'>Speak to Live Experts </Button>
            </div>        
        </div>
    </div>
  )
}

export default WhatWeOfferGrid