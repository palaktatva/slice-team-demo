import React from 'react'
import Casestudy from '../component/casestudy';
import Trustorganization from '../component/trustorganization';
import bannerJpg from '../assets/images/banner-career.jpg';
import Countingblock from '../component/countingblock';
import GetStarted from '../component/GetStarted';
const Home = () => {
  return (
    <div className='home-page'>
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
                       <a href="#" title="Talk to our Experts" className="btn yellow-btn">Talk to our Experts</a>
                  </div>
            </div>
        </section>
        <section className='market-analysis-section'>
            <div className="container">
                <p>Lorem Ipsum has been the industrys standard <span>Dummy text.</span></p>
                <div className="market-analysis--grid-block">
                    <div className="market-analysis-grid">
                        <span className='title'>15k</span>
                        <h3>Market Analysis
                        <span>Case Studies</span></h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an </p>
                        </div>
                    </div>
                    <div className="market-analysis-grid">
                        <span className='title'>13k</span>
                        <h3>Market Analysis
                        <span>Case Studies</span></h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an </p>
                        </div>
                    </div>
                    <div className="market-analysis-grid">
                        <span className='title'>16k</span>
                        <h3>Market Analysis
                        <span>Case Studies</span></h3>
                        <div className="content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an </p>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
        <Casestudy/>
        <Trustorganization/>
        <Countingblock/>
        <GetStarted/>
    </div>
  )
}

export default Home