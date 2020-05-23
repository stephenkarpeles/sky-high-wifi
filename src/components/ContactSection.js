import React from 'react'
import Zoom from 'react-reveal/Zoom'
import ContactForm from './ContactForm.js'
import ContactImage from '../images/contact.svg';

function ContactSection() {
  return (
    <div>      
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col col-full-width text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <Zoom>
          <div className="container">
            <div className="row">
              <div className="col col-full-width">          
                <ContactForm />          
              </div>
            </div>
          </div>
        </Zoom>
      </section>      
    </div>
  )
}

export default ContactSection