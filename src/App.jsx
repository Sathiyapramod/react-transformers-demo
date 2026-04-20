import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
// please import your router configuration here
import myRouter from "./routes/Routes";

export default function App() {
  return (
    <div>
      <RouterProvider router={myRouter}>
        
      </RouterProvider>
    </div>
  );
}
