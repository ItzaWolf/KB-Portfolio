import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <p className='contactDesc'>Please fill out the form below to reach out to me via email! I look forward to speaking with you!</p>
            <form className='contactForm'>
                <input type='text' className='name' name='name' placeholder='Your Name' autoComplete="name"></input>
                <input type='email' className='email' name='email' placeholder='Your Email' autoComplete="off"></input>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact