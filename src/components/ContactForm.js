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
          name: 'MMERGE1',
          placeholder: 'First Name',
          type: 'text',
          required: false
        },
        {
          name: 'MMERGE2',
          placeholder: 'Last Name',
          type: 'text',
          required: false
        },
        {
          name: 'MMERGE3',
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
          empty: "Please provide your e-mail address.",
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