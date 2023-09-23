import React from 'react';

const Circle = ({x,y}) => {
  const circleStyle = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    transform: `translate(${x - 25}px, ${y - 25}px)`,
  };

  return <div style={circleStyle}></div>;
};

export default Circle;