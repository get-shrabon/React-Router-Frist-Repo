/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <div className="container mx-auto bg-blue-900 shadoww rounded-full p-5 w-[400px] h-[400px] text-center text-red-800 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold">Digital Clock</h1>
        <h1 className="text-3xl font-mono text-center">{`${hours}:${minutes}:${seconds}`}</h1>
      </div>
    </div>
  );
};

export default DigitalClock;
