import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
// please import your router configuration here
// import myRouter from "./routes/Routes";

export default function App() {
  // state variables
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  // api data
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      // api logic
      const API_URL = "http://reactexample.vercel.app/customers";

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // ok / not ok
      // 200
      if (response.status !== 200) {
        alert("API Call Failed");
      } else {
        // success
        const data = await response.json();
        console.log(data);
        setCustomers(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // button event listeners
  const handleFirst = () => setFirst((prev) => !prev);
  const handleSecond = () => setSecond((prev) => !prev);
  const handleThird = () => setThird((prev) => !prev);

  // initial rendering will be completed
  // jeeva function - atleast one time it will be executed

  // whenver first is modified, jeeva will get executed
  useEffect(() => {
    console.log("first is modified");
  }, [first]);

  // single API call only -> go with []
  useEffect(() => {
    console.log("All Silver Tea Cups");
    getCustomers();
  }, []);

  // whenever dealing with two (or) more state variables
  // any state getting changes , function call will happen
  useEffect(() => {
    console.log("first , Second");
  }, [first, second]);

  return (
    <div>
      {/* <RouterProvider router={myRouter}>
        
      </RouterProvider> */}
      <h1 className="font-bold text-5xl">React Recap Class</h1>
      <div className="flex flex-row gap-3 justify-center items-center mt-4">
        <button
          className="bg-blue-500 p-2 text-white rounded-sm mt-2 w-fit"
          onClick={handleFirst}
        >
          Current First = {first === false ? "false" : "true"}
        </button>
        <button
          className="bg-blue-500 p-2 text-white rounded-sm mt-2 w-fit"
          onClick={handleSecond}
        >
          Current second = {second === false ? "false" : "true"}
        </button>
        <button
          className="bg-blue-500 p-2 text-white rounded-sm mt-2 w-fit"
          onClick={handleThird}
        >
          Current third = {third === false ? "false" : "true"}
        </button>
      </div>
    </div>
  );
}
