import React from "react";
import "./App.css";
import Description from "./components/hero/Description";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Demo from "./components/Demo";
import Effect from "./components/Effect";

export default function App() {
  return (
    <div>
      <section>
        {/* React Group */}
        {/* input -> props */}
        {/* <Description name="React Superstars" /> */}

        {/* Fast pace  */}
        {/* <Description name="Fast pace" /> */}

        {/* Workplace study */}
        {/* <Description name="workplace study" /> */}

        {/* IT Support */}
        {/* <Description name="IT support" /> */}

        {/* QA */}
        {/* <Description name="QA" /> */}
      </section>

      {/* colors  */}
      {/* <Colors /> */}
      {/* <Form /> */}
      {/* <Demo /> */}
      {/* <Effect /> */}

      <header>
        <nav>
          <ul className="menu-bar">
            <li>Home</li>
            <li>skills</li>
            <li>contact</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
