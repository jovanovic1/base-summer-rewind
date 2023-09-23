// components/ConcentricCircles.js
import React from 'react';
import './ConcentricCircles.css';
const ConcentricCircles = () => {
  return (
    <div className="concentric-circles">
      <div className="circle circle-outer"></div>
      <div className="circle circle-middle"></div>
      <div className="circle circle-inner"></div>
    </div>
  );
};

export default ConcentricCircles;