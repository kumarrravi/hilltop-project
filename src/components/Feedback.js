import React from 'react';
import "../styles/feedback.css";

const Feedback = () =>{
  return (
    <div className="feedback-div">
      <h1 className="feedback-header">Drop A Message!</h1>
      <hr />
      <form className="feedback-form">
        <div className="one-field">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" className="input-field" />
        </div>
        <div className="one-field">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" className="input-field" />
        </div>
        <div className="one-field">
          <label for="contact">Contact</label>
          <input type="number" name="contact" placeholder="Enter your contact number" className="input-field" />
        </div>
        <div className="one-field">
          <label for="area">Area</label>
          <input type="dropdown" name="area" placeholder="Select Category" className="input-field "/>
        </div>
        <div className="one-field">
          <label for="message">Message</label>
          <input name="message" type="text" placeholder="Type a message to us" className="input-field message"/>
        </div>
        <input type="Submit" value="Send" className="btn btn-primary btn-md submit-button"/>
      </form>
    </div>
  )
}

export default Feedback;
