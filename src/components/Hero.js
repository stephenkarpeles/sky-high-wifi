import React from 'react'
import Fade from 'react-reveal/Fade'

function Hero() {
  return (
    <section className="hero">
      <Fade bottom> 
        <div className="container">
          <h1>Full WiFi coverage.<br/>Faster WiFi speed.</h1>
          <p>For residential and commercial properties.</p>
          {/*<h1>We are a consulting company that provides service to ensure full WiFi coverage and speed to residential and commercial properties.</h1>*/}
          <div className="hero__cta-block">
            <a className="btn btn--primary btn--large" href="/">Get Started</a>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Hero