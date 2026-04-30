import React, { useState } from "react";
// importing package
import * as yup from "yup";
import { useFormik } from "formik";

function Form() {
  // yup validation schema
  const studentSchema = yup.object({
    name: yup
      .string()
      .max(20)
      .min(5)
      .matches(/^[a-zA-Z ]+$/g)
      .required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .length(10, "You have to Enter Only 10 Digits")
      .required(),
    city: yup.string().optional(),
    // option: yup.string().required(),
  });

  // formik validation part
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      // option: "",
    },
    validationSchema: studentSchema,
    onSubmit: async (values) => {
      console.log(values);
      // you will have API calls
      // CREATE A STUDENT PROFILE IN BACKEND
      const API_URL = "http://localhost:4000/api/students";
      const data = "hello";

      // payload ready
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        city: values.city,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.status !== 200) {
        alert("Student Creation failed");
      } else {
        alert("student created Successfully");
      }
    },
  });

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

      <form className="form" onSubmit={formik.handleSubmit}>
        {/* name */}
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            value={formik.values.name}
            id="name"
            name="name"
            onChange={formik.handleChange}
            className="bg-white p-2 rounded-sm"
          />
        </div>

        {/* Message to show - if any Errors  */}
        <div className="text-red-500">
          {formik.errors.name && formik.touched.name ? formik.errors.name : ""}
        </div>

        {/* email */}
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            value={formik.values.email}
            id="email"
            name="email"
            onChange={formik.handleChange}
            className="bg-white p-2 rounded-sm"
          />
        </div>
        {/* Message to show - if any Errors  */}
        <div className="text-red-500">
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : ""}
        </div>

        {/* phone */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="input"
            value={formik.values.phone}
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-white p-2 rounded-sm"
          />
        </div>
        {/* Message to show - if any Errors  */}
        <div className="text-red-500">
          {formik.errors.phone && formik.touched.phone
            ? formik.errors.phone
            : ""}
        </div>
        {/* city */}
        <div className="form-group">
          <label>City / Town</label>
          <input
            type="text"
            placeholder="Enter city"
            className="input"
            value={formik.values.city}
            id="city"
            name="city"
            onChange={formik.handleChange}
            className="bg-white p-2 rounded-sm"
          />
        </div>

        {/* Message to show - if any Errors  */}
        <div className="text-red-500">
          {formik.errors.city && formik.touched.city ? formik.errors.city : ""}
        </div>

        {/* food */}
        {/* <div className="form-group">
          <h4 className="section-title">Select Food Option</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                id="option"
                name="option"
                value="breakfast"

                onChange={formik.handleChange}
              />
              Breakfast
            </label>

            <label>
              <input
                type="radio"
                id="option"
                name="option"
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
        </div> */}

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
