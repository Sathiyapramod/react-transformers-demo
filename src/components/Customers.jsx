import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// subscribe action
import { useContext } from "react";
import { ConfigContext } from "../context/configContext";

function Customers() {
  // declare a variable named navigate
  const navigate = useNavigate();

  const { customers, setCustomers } = useContext(ConfigContext);

  const handleClick = (id) => {
    console.log("You have Clicked Customer ID", id);
    navigate(`/customers/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl.no.,</th>
            <th>Customer Name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((element) => {
            const { id, email, name } = element;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
