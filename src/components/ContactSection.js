import React from 'react'
import Fade from 'react-reveal/Fade'
import ContactForm from './components/ContactForm.js'

function ContactSection() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col col-1-4"></div>
          <div className="col col-1-2">
            <ContactForm />
          </div>
          <div className="col col-1-4"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection