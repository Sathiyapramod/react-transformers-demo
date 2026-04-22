import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* header component */}
      <header>
        <nav>
          <ul className="menu-bar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* home -> home page 
          about -> about page 
          skills - > skill page 
      */}
      <section className="dynamic-outlet">
        <Outlet />
      </section>
      {/* footer component */}
      <footer className="footer">Copyrights - All Rights Reserved</footer>
    </div>
  );
}

export default MainLayout;
