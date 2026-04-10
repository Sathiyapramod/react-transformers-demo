import React, { useState, useEffect } from "react";

function Demo() {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err, "Error has happened ");
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const result = users.map(() => {});

  return <div></div>;
}

export default Demo;
