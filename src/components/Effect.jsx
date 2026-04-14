import React, { useState, useEffect } from "react";

function Effect() {
  const [value, setValue] = useState(0);

  useEffect(() => {}, []); // dependency array

  return (
    <div>
      <button
        className="button border p-2 rounded-sm"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>{" "}
      {value}{" "}
      <button
        className="button border p-2 rounded-sm"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Effect;
