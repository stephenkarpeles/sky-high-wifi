import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import AboutImage from '../images/headshot.png';

function AboutSection() {
  return (
    <div>         
      <section className="about">  
        <div className="container">
          <div className="row">
            <div className="col col-full-width text-center">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
        
          <div className="container">
            <div className="row">
              <div className="col col-full-width">
                <Fade bottom cascade>
                  <div className="about-content">                
                    <div className="about-content__left-col">
                      <div className="about-content__quote">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                      </div>                      
                    </div>
                    <div className="about-content__right-col">
                      <div className="about-content__right-col-wrap">
                        <div className="about-content__img">
                          <img src={AboutImage}/>
                        </div>
                        <div className="about-content__name">
                          <h4>Herbert Obah</h4>
                        </div>                    
                        <div className="about-content__credentials">
                          <p>
                            <strong>Founder &amp; CEO</strong><br/>
                            CCNA Certified <br/>
                            WiFi Consultant
                          </p>
                        </div>
                      </div>
                    </div>                                     
                  </div> 
                </Fade>                        
              </div>
            </div>
          </div>
                
      </section>            
    </div>
  )
}

export default AboutSection