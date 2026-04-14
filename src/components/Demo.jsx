import React, { useState, useEffect } from "react";

function Demo() {
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err, "Error has happened ");
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="flex flex-row justify-between flex-wrap gap-3">
      {users.map((eachUser) => (
        <div name="users" key={eachUser.id} className="border rounded-sm">
          <h2>{eachUser.name}</h2>
          <p>{eachUser.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Demo;
