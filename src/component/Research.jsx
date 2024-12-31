import React from 'react'
import Button from '@mui/material/Button';
import ResearchImg from '../assets/images/research-section-img.jpg';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
const Research = () => {
  return (
    <div className="secondary-research-section">
    <div className="container">
        <div className="breadcrumb-block">
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Research Services
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/secondary-research"
        >
          Secondary Research
        </Link>
      </Breadcrumbs>
        </div>
        <div className="research-content-wrapper">
            <div className="image-block"><img src={ResearchImg} alt="research-section-img" /></div>
            <div className="content-block">
                <h2>Secondary Research</h2>
                <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                </div>
                <div className="button-wrapper">
                <Button variant="outlined" className='btn'>Submit Your Request</Button>
                <Button variant="outlined" className='btn blue-btn'>Speak to Live Experts </Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Research