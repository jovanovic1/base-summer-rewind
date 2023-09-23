import React, { useEffect } from 'react';

const PartialCircle = ({mouthAngle, lookAngle}) => {

  useEffect(() => {
    const canvas = document.getElementById('partialCircleCanvas');
    const ctx = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80; // Adjust the radius as needed

    ctx.beginPath();
    ctx.lineWidth = 1.2;
    ctx.arc(centerX, centerY, radius, 0 + mouthAngle, 2*Math.PI - mouthAngle);
    ctx.stroke();
    ctx.strokeStyle = 'gray'; // Set the fill color
  }, [mouthAngle]);

  return (
    <div>
      <canvas id="partialCircleCanvas" width="200" height="200" style={{transform: `rotate(${lookAngle}deg)`}}></canvas>
    </div>
  );
};

export default PartialCircle;