import React from "react";

function Card({ paraContent, divContent }) {
  return (
    <div>
      <p>{paraContent}</p>
      <div>{divContent}</div>
    </div>
  );
}

export default Card;
