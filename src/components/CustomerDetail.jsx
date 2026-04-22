import React from "react";
import { useParams , useNavigate } from "react-router-dom";

function CustomerDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  // go back action
  const handleClick = () => { 
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
      <div>The Customer ID is {id}</div>
    </div>
  );
}

export default CustomerDetail;
