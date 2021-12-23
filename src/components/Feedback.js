import React from 'react';
import Cusheader from "./Cusheader.js";
import "../styles/Feedback.css";

const Feedback = () =>{
  return (
    <div>
      <Cusheader />
      <div className="feedback-div">
        <h1 className="feedback-header">Drop A Message!</h1>
        <hr />
        <form className="feedback-form">
          <div className="one-field">
            <label for="name">Name</label>
            <input type="string" name="name" placeholder="Enter your name" className="input-field" />
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
            <select className="custom-select input-field" style={{height:"35px"}}>
              <option selected>Select Category </option>
              <option>Customer Service </option>
              <option>Hygiene and Ambience</option>
              <option>Dining</option>
              <option>Spa,Swimming Pool and Others</option>
            </select>
          </div>
          <div className="one-field">
            <label for="message">Message</label>
            <input name="message" type="text" placeholder="Type a message to us" className="input-field message"/>
          </div>
          <input type="Submit" value="Send" className="btn btn-primary btn-lg submit-button"/>
        </form>
      </div>
    </div>
  )
}

export default Feedback;
