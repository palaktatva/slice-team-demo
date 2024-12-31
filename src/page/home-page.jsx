import React from 'react'
import Casestudy from '../component/casestudy';
import Trustorganization from '../component/trustorganization';
import Countingblock from '../component/countingblock';
import Banner from '../component/Banner';
import MarketAnalysis from '../component/MarketAnalysis';
import Footer from '../component/footer';
import GetStarted from '../component/GetStarted';
import ContactUs from '../component/ContactUs';


const HomePage = () => {
  return (
    <div className='home-page'>  
        <Banner/>      
        <MarketAnalysis/>
        <Casestudy/>
        <Trustorganization/>
        <Countingblock/>
        <GetStarted/>       
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default HomePage