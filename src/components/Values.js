import React from 'react'
import Fade from 'react-reveal/Fade';
import SmartHomeImage from '../images/smart-home.svg';
import ShopperImage from '../images/shopper.svg';
import ServiceImage from '../images/service.svg';

function Values() {
  return (
    <section className="values text-center">
      <div className="container">

        <div className="row">
          <div className="col-full-width">
            <h2 className="section-heading">Who We Are</h2>
          </div>
        </div>        
        
        <Fade bottom cascade> 
          <div className="row">          
            <div className="col col-1-3">
              <div className="value-block value-block--1">
                <div className="value-block__img">
                  <img src={SmartHomeImage}/>
                </div>
                <div className="value-block__text">
                  <h4>A bridge between you and the technical world</h4>
                  <p>We keep pace with the ever-changing world of technology, so that you don't have to.</p>
                </div>
              </div>
            </div>          
            <div className="col col-1-3">
              <div className="value-block value-block--2">
                <div className="value-block__img">
                  <img src={ShopperImage}/>
                </div>
                <div className="value-block__text">
                  <h4>Your personal shopper</h4>
                  <p>We'll shop for you and filter through all the technical jargon to find the products that fit your property’s exact WiFi needs.</p>
                </div>
              </div>
            </div>
            <div className="col col-1-3">
              <div className="value-block value-block--3">
                <div className="value-block__img">
                  <img src={ServiceImage}/>
                </div>
                <div className="value-block__text">
                  <h4>A white glove service provider</h4>
                  <p>We believe all our customers are worth the extra effort. We don't take shortcuts or skimp on quality. We focus on excellence in everything we do.</p>
                </div>
              </div>
            </div>          
          </div>
        </Fade>
        
      </div>
    </section>
  )
}

export default Values