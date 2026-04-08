import React from "react";
import { useState } from "react";

function Colors() {
  // we need to change the color based on radio selection
  const [currentColor, setCurrentColor] = useState(null);
  return (
    <div className="colors-container">
      <div
        className="box"
        style={{
          backgroundColor: currentColor,
          color: "red",
        }}
      ></div>
      <div>
        <br />
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <br />
        <input
          type="radio"
          name="colors"
          onChange={() => {
            setCurrentColor("red");
          }}
        />{" "}
        <label>Red</label> <br />
        <input
          type="radio"
          name="colors"
          onChange={() => {
            setCurrentColor("yellow");
          }}
        />{" "}
        <label>Yellow</label> <br />
        <input
          type="radio"
          name="colors"
          onChange={() => {
            setCurrentColor("blue");
          }}
        />{" "}
        <label>Blue</label>
      </div>
    </div>
  );
}

export default Colors;
