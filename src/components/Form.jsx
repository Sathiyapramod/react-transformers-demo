import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    option: "",
  });

  const [studentList, setStudentList] = useState([]);

  const addStudent = (event) => {
    event.preventDefault();
    setStudentList((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      option: "",
    });
  };

  const handleDelete = (index) => {
    const first = studentList.slice(0, index);
    const second = studentList.slice(index + 1);
    const result = [...first, ...second];
    setStudentList(result);
  };

  const handleEdit = (index) => {
    console.log(index);
    let currentStudent = studentList[index];
    setFormData(currentStudent);
  };

  return (
    <div className="container">
      <h1 className="title">Student Registration</h1>

      <form className="form" onSubmit={addStudent}>
        {/* name */}
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* email */}
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* phone */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="input"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* city */}
        <div className="form-group">
          <label>City / Town</label>
          <input
            type="text"
            placeholder="Enter city"
            className="input"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>

        {/* food */}
        <div className="form-group">
          <h4 className="section-title">Select Food Option</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="food"
                value="breakfast"
                onChange={(e) =>
                  setFormData({ ...formData, option: e.target.value })
                }
              />
              Breakfast
            </label>

            <label>
              <input
                type="radio"
                name="food"
                value="lunch"
                onChange={(e) =>
                  setFormData({ ...formData, option: e.target.value })
                }
              />
              Lunch
            </label>

            <label>
              <input
                type="radio"
                name="food"
                value="dinner"
                onChange={(e) =>
                  setFormData({ ...formData, option: e.target.value })
                }
              />
              Dinner
            </label>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Food</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map((x, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.city}</td>
              <td>{x.option}</td>
              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
