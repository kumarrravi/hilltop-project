import React from 'react';
import '../styles/CusHome.css';
import roomimage from "../images/room.jpg";
import Header from "./Cusheader";


const CusHome = () => {
  return (
    <div>
      <Header />
      <div className="wrap-div">
        <h1 className="title">Welcome to Hilltop Heaven Resort!</h1>
        <div className="image-about">
            <img src={roomimage} alt="hotel"/>
            <div className="card">
              <h3 className="card-header ">About Us</h3>
              <p className="card-para">
                Hilltop Heaven is one of the most rejoicing resorts provided by services that rests on the serene lap of nature.
                Being appreciated as excellent by all the customers. Hilltop Heaven resort will be your top choice to enjoy your
                vacation.
              </p>
              <button className="card-button btn btn-primary btn-md">Room Details</button>
            </div>
        </div>
      </div>
    </div>
  )

}

export default CusHome;
