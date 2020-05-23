import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import Fade from 'react-reveal/Fade'

function ContactForm() {
  return (
    <Mailchimp
      action='https://stephenkarpeles.us18.list-manage.com/subscribe/post?u=f1b9e71907606178ae2ffa6b4&amp;id=4c849b7990'
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        },
        {
          name: 'FNAME',
          placeholder: 'First Name',
          type: 'text',
          required: false
        },
        {
          name: 'LNAME',
          placeholder: 'Last Name',
          type: 'text',
          required: false
        },
        {
          name: 'HELP',
          placeholder: 'How can we help you?',
          type: 'textarea',
          required: false
        }
      ]}

      messages = {
        {
          sending: "Sending...",
          success: "Thanks for your message, we'll contact you shortly!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Send!"
        }
      }
      // Add a personalized class
      className='contact-form'
    />
  )
}

export default ContactForm