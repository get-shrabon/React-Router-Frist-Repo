/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const DigitalCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "c",
  ];

  return (
    <div className="mt-5">
      <h1 className="text-center">Digital Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input className="w-[100%] bg-slate-600 border rounded-sm p-3 mb-4 text-white" type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons grid grid-cols-4 gap-4">
          {buttons.map((button, index) => (
            <button
              className="btn btn-outline btn-success"
              key={index}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalCalculator;
