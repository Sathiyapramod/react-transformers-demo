import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Customers() {
  // declare a variable named navigate
  const navigate = useNavigate();

  // this is the way to declare a variable (Hook)
  const [customers, setCustomers] = useState([
    {
      id: "1",
      name: "john",
      email: "john@io.com",
    },
    {
      id: "2",
      name: "steve",
      email: "steve@io.com",
    },
    {
      id: "3",
      name: "alice",
      email: "alice@io.com",
    },
  ]);

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
