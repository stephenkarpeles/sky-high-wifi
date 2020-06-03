import React from 'react'
import Zoom from 'react-reveal/Zoom'
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
              <div className="about-content">
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
        </div>
      </section>      
    </div>
  )
}

export default AboutSection