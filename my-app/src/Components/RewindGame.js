// components/ConcentricCircles.js
import React, {useEffect, useState} from 'react';
import RewindLevel from './RewindLevel';
function RewindGame ({nLevels}) {
  const [lookAtAngle, setLookAngle]       = useState({lookAtAngle: 0 });
  const [currentLevel, setCurrentLevel]   = useState({currentLevel: 1});
  const [totalLevels, setTotalLevels]     = useState({totalLevels: 0});

  useEffect(() => {
      setTotalLevels({totalLevels: nLevels});
      const handleMouseMove = (e) => {
        const centerX = window.innerWidth/2;
        const centerY = window.innerHeight/2;
        const mouseX  = e.clientX;
        const mouseY  = e.clientY;
    
        const radians     = Math.atan2(mouseY - centerY, mouseX - centerX);
        const deg         = radians * 180 / Math.PI;
        setLookAngle(deg);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
  }, []); 

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <RewindLevel lookAngle={lookAtAngle} currentLevel={1} totalLevels={2} />
    </div>
  );
};

function Player(){
  this.position = {x: 0, y:0};
  
}

export default RewindGame;