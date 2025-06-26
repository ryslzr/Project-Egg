import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Timer12mins = ({ setIsTiming }) => {
    
    const ding = new Audio('./src/assets/ding.mp3');
    const initialTime = 720;
    const [timeLeft, setTimeLeft] = useState(initialTime); 
    const [hasStarted, setHasStarted] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {

    if (timeLeft === 0) {
    let count = 0;
    const ding = new Audio('./src/assets/ding.mp3');

    const interval = setInterval(() => {
      ding.currentTime = 0;
      ding.play();
      count++;

      if (count === 3) {
        clearInterval(interval);
      }
    }, 1300); 
  }

    setIsTiming?.(hasStarted && timeLeft > 0);

    if (!hasStarted || timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [hasStarted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${padZero(mins)}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (timeLeft > 0) setHasStarted(true);
  };

  const handleReset = () => {
    setTimeLeft(initialTime);
    setHasStarted(false);
  };

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  return (

    <div>
      <h1 className="time-font">{formatTime(timeLeft)}</h1>
      {!hasStarted && (
        <button onClick={handleStart}>Start Timer</button>        
      )}
      {hasStarted && ( <button onClick={handleReset}>Reset</button>
      )}
      <button onClick={() => {navigate("/");}}>
            Back</button>
    </div>

  );
};

export default Timer12mins;