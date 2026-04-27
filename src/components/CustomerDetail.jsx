import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// subscribe
import { useContext } from "react";
import { ConfigContext } from "../context/configContext";

function CustomerDetail() {
  const { customers } = useContext(ConfigContext);
  // console.log(customers);

  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id);

  const currentCustomer = customers.find((el) => {
    return el.id === id;
  });

  console.log(currentCustomer);

  // go back action
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
      {currentCustomer ? (
        <div>
          <p>The Customer id is {currentCustomer ? currentCustomer.id : ""}</p>
          <p>Customer Name = {currentCustomer ? currentCustomer.name : ""}</p>
          <p>Customer Email = {currentCustomer ? currentCustomer.email : ""}</p>
        </div>
      ) : (
        <span>No Customer Found</span>
      )}
    </div>
  );
}

export default CustomerDetail;
