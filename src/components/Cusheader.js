import React from 'react';
import "../styles/Cusheader.css";

const Cusheader = () => {
  return (
    <div className="header">
      <div className="links-div">
        <a href="/#" className="one-link">Send Feedback</a>
        <a href="/#" className="one-link">Know Our Feedbacks</a>
      </div>
      <a href="/#" className="logout-link">Logout</a>
    </div>
  )
}

export default Cusheader;
