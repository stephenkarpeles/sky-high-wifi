import React from 'react'
import Fade from 'react-reveal/Fade'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="row">
          <div className="col col-3-5">
            <div className="problem-block-large-wrapper">
              <h1>Tired of slow WiFi speeds?</h1>  
              <p>Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things.</p> 
              <p>Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things. Paragraph here about something and more stuff and more stuff and things.</p> 
              <a className="btn btn--secondary btn--large btn--problem" href="/">Get Started</a>
            </div>
          </div>
          <div className="col col-2-5">
            <Fade bottom cascade>
              <div className="problem-block-small-wrapper">
                <div className="problem-block-small">
                  <h5>Always losing connection when going into another room?</h5>
                  <p>Paragraph here about something and more stuff and more stuff and things.</p>
                </div>
                <div className="problem-block-small">
                  <h5>Does your WiFi name suddenly disappear and reappear?</h5>
                  <p>Paragraph here about something and more stuff and more stuff and things.</p>
                </div>
                <div className="problem-block-small">
                  <h5>Are you lost in the technical jargon trying to understand how to improve your WiFi?</h5>
                  <p>Paragraph here about something and more stuff and more stuff and things.</p>
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