import React from "react";
import { useState } from "react";

function Form() {
  // dictionary
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    option: "",
  });

  const [text, setText] = useState(true);

  const toggleButton = () => setText((previousState) => !previousState);

  return (
    <div>
      {/*           
          name
          email id 
          phone
          city 
          food options -> breakfast, lunch, dinner 
          */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formData);
        }}
      >
        {/* name */}
        <div>
          <label htmlFor="name">Student name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, name: event.target.value };
              })
            }
          />
        </div>
        {/* email id */}
        <div>
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email Id"
            name="email"
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, email: event.target.value };
              })
            }
          />
        </div>
        {/* phone */}
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            name="phone"
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, phone: event.target.value };
              })
            }
          />
        </div>
        {/* city */}
        <div>
          <label htmlFor="city">City / Town</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            onChange={(event) =>
              setFormData((prev) => {
                return { ...prev, city: event.target.value };
              })
            }
            name="city"
          />
        </div>
        {/* food */}
        <div>
          <h4>Select your Food Option</h4>
          <div>
            <input
              type="radio"
              name="food"
              value="breakfast"
              id="breakfast"
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, option: event.target.value };
                })
              }
            />
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="radio"
              name="food"
              value="lunch"
              id="lunch"
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, option: event.target.value };
                })
              }
            />
            <label htmlFor="lunch">Lunch</label>
            <input
              type="radio"
              name="food"
              value="dinner"
              id="dinner"
              onChange={(event) =>
                setFormData((prev) => {
                  return { ...prev, option: event.target.value };
                })
              }
            />
            <label htmlFor="dinner">Dinner</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* conditional rendering */}
      <button onClick={toggleButton}>{text === true ? "OK" : "NOT OK"}</button>
    </div>
  );
}

export default Form;
