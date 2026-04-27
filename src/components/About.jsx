import React from "react";
import Card from "./Card";

function About() {
  return (
    <div>
      This is the About page for the website
      {/* Card Section */}
      <Card
        paraContent={"Separate paragraph"}
        divContent={"This is a separate div"}
      />
    </div>
  );
}

export default About;
