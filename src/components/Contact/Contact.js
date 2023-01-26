
import classes from './Contact.module.css'
import React, { useState } from "react";



const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
      <div className={classes.FormSubmitted}>
        <h1>Thank you!</h1>
        <h3>I'll be in touch soon.</h3>
        </div>
      </>
    );
  }

  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactForm}>
        <div className={classes.Header}>
          <h1>Contact</h1>
          <h4>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible</h4>
        </div>
        <div className={classes.Form}>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            >
            <div>
              <input type="text" placeholder="NAME" name="name" required />
            </div>
            <div>
              <input type="email" placeholder="EMAIL" name="email" required />
            </div>
            <div>
              <textarea placeholder="MESSAGE" name="message" required />
            </div>
            <div>
              <button type="submit"> SEND MESSAGE </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
   );
}
 
export default Contact;