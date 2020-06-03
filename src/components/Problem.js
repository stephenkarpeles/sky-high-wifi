import React from 'react'
import Fade from 'react-reveal/Fade'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="row">
          <div className="col col-3-5">
            <div className="problem-block-large-wrapper">
              <h1>Tired of slow WiFi speeds?</h1>  
              <p>We understand the frustration of slow WiFi performance - especially in an age of video calls, streaming television &amp; movies, and the "always connected" world we live in.</p> 
              <p>At SkyHigh WiFi, we'll analyze your current internet setup, discover why it's slow, and provide solutions to increase your WiFi speed - throughout your entire property.</p> 
              <AnchorLink className="btn btn--secondary btn--large btn--problem" href="#contact">Get Started</AnchorLink>
            </div>
          </div>
          <div className="col col-2-5">
            <Fade bottom cascade>
              <div className="problem-block-small-wrapper">
                <div className="problem-block-small">
                  <h5>Always losing connection when going into another room?</h5>
                  <p>We can reconfigure your WiFi setup, in order to provide full coverage in every room (and even outdoors).</p>
                </div>
                <div className="problem-block-small">
                  <h5>Does your WiFi name suddenly disappear and reappear?</h5>
                  <p>We'll diagnose why your connection keeps dropping, and provide you with a stable, consistent signal.</p>
                </div>
                <div className="problem-block-small">
                  <h5>Are you lost in the technical jargon trying to understand how to improve your WiFi?</h5>
                  <p>We'll be your guide to the latest technology, and personally shop for the best products that fit your needs.</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default Problem