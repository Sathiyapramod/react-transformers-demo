import React from "react";
import hero from "../assets/hero.png";

function Contact() {
  return (
    <div>
      {/* Section1 :Image Plus Heading (h2)  */}
      {/* Reach Out Section */}
      <h2>Contact us</h2>
      <img src={hero} alt="" />
      {/* Section2: p tag & div tag  */}
      {/* Card Section */}
      <p>This is a paragraph</p>
      <div>This is a div </div>
    </div>
  );
}

export default Contact;
