import React from "react";
import "./App.css";
import Description from "./components/hero/Description";
import Colors from "./components/Colors";
import Form from "./components/Form";

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
      <Form />
    </div>
  );
}
