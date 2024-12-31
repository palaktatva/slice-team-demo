import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
    <section className='contact-us-section'>
    <div className="container">
    <h2>Contact Us</h2>
    <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
      <div className="form-outer-wrapper">
     <Box component="form" className='form-wrapper'>
        <div className="form-group col-3">
            <InputLabel>First Name</InputLabel>
            <TextField  placeholder="Input your first name in here" variant="outlined" fullWidth />
        </div>
        <div className="form-group col-3">
            <InputLabel>Last Name</InputLabel>
            <TextField  placeholder="Input your Last name in here" variant="outlined" fullWidth />
        </div>
        <div className="form-group col-3">
            <InputLabel>Email address</InputLabel>
            <TextField  placeholder="Input your email address in here" variant="outlined" fullWidth />
        </div>
        <div className="form-group">
            <InputLabel>Messages</InputLabel>
            <TextField  placeholder="Write your messages in here" variant="outlined" multiline  rows={6} maxRows={10} fullWidth />
        </div>                
     </Box>
        <div className="button-wrapper">
          <Button variant="contained" className='btn blue-btn'>send Messages</Button>
        </div>
     </div>
    </div>          
</section>
  )
}

export default ContactUs