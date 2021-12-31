import React from 'react';
import resort1 from '../images/resort2.jpg';
import "../styles/App.css";
import Feedback from "./Feedback.js";
import CusHome from "./CusHome.js";

function App() {
  const flag=1;
  return (
    <div className="app">
      <img src={resort1} alt="resort" className="resort-img" />
      {flag===0? <Feedback /> :<CusHome />}
    </div>
  );
}

export default App;
