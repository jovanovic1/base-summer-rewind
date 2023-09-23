// components/ConcentricCircles.js
import React, {useState} from 'react';
import Circle from './Circle';
import PartialCircle from './ParticleCircle';
function RewindLevel ({currentLevel, totalLevels, lookAngle}) {

  return (
    <div id="items" style={{position: 'absolute',top: '50%',left: '50%',transform: `translate(-50%, -50%)`}}>
      <PartialCircle lookAngle={lookAngle} mouthAngle={currentLevel * Math.PI / 2}/>
    </div>
  );
};

export default RewindLevel;