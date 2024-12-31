import React from 'react'
import Button from '@mui/material/Button';
import IndustryBlockImg from '../assets/images/industry-block-img.jpg';
const IndustryBlock = () => {
  return (
    <section className='industry-section'>
        <div className="container">
            <div className="industry-block">
                <div className="content-block">
                    <h2>Lorem Ipsum is simply dummy text of industry.</h2>
                    <div className="content">
                    <p>Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. </p>
                    </div>
                    <Button variant="outlined" className='btn white-btn'>Schedule a Call</Button>
                </div>
                <div className="img-block">
                    <img src={IndustryBlockImg} alt="industry-block-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default IndustryBlock