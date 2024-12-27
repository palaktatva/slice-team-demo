import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import casestudyimg_1 from '../assets/images/casestudy-img-1.jpg';
import casestudyimg_2 from '../assets/images/casestudy-img-2.jpg';
import casestudyimg_3 from '../assets/images/casestudy-img-3.jpg';
import casestudyimg_4 from '../assets/images/casestudy-img-4.jpg';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Casestudy() {
    const [value, setValue] = React.useState(0);  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <>
        <section className='case-study-section'>        
        <div className="container">
                <div className="title-block">
                    <h2>Empowering Your Case studies: Our Comprehensive Case studies.</h2>  
                    
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Startup business plan" {...a11yProps(0)} />
                            <Tab label="Ai business plan" {...a11yProps(1)} />
                            <Tab label="Startup business plan" {...a11yProps(2)} />
                            <Tab label="Ai business plan " {...a11yProps(2)} />
                        </Tabs>
                         
                </div>
                <Box sx={{ width: '100%' }}>
                   
                    <div className="tab-content-block">
                    <CustomTabPanel className="tab-content" value={value} index={0}>
                    <div className="tab-grid-wrapper">
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_1} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_2} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_2} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_3} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_3} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                            <div className="tab-grid">                                
                                <div className="image-block"><img src={casestudyimg_4} alt="casestudyimg" /></div>
                                <div className="content-block">
                                <h3>Startup business plan powerpoint presentation slides</h3>
                                <p>If you are bothered about how to write a perfect business plan for startups, then these content-ready startup business plan...</p>
                                <div className="autor-name"><span>Author:</span><p>Alex Turner</p></div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="button-wrapper">
                            <a href="#" className='btn'>Load More Case Study..</a>
                        </div> 
                    </CustomTabPanel>
                    <CustomTabPanel className="tab-content" value={value} index={1}>
                     Item Two
                    </CustomTabPanel>
                    <CustomTabPanel className="tab-content" value={value} index={2}>
                     Item Three
                    </CustomTabPanel>
                    <CustomTabPanel className="tab-content" value={value} index={3}>
                     Item four
                    </CustomTabPanel>
                    </div>
                </Box>         
        </div>        
       </section>
      </>
    );
  }