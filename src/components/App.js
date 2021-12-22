import React from 'react';
import resort1 from '../images/resort2.jpg';
import "../styles/App.css";
import Feedback from "./Feedback.js";

function App() {
  return (
    <div className="app">
      <img src={resort1} alt="resort" className="resort-img" />
      <Feedback />
    </div>
  );
}

export default App;
