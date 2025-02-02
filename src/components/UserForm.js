import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Function to generate a simple unique ID using timestamp
const generateUserId = () => uuidv4();

const UserForm = ({ userData, setUserData }) => {
  const [formData, setFormData] = useState(userData);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsDirty(true); // Mark as changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If user ID is empty, generate a new one
    if (!formData.id) {
      formData.id = generateUserId(); // Add a new ID if it doesn't exist
    }

    setUserData(formData);
    localStorage.setItem("userForm", JSON.stringify(formData));
    setIsDirty(false); // Mark as saved
  };

  const handleReset = () => {
    setFormData({ id: "", name: "", email: "", phone: "", address: "" });
    setIsDirty(false); // Reset changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3 my-3 mx-3">
        <input
          type="text"
          name="name"
          className="form-control"
          id="floatingInput"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <label htmlFor="floatingInput">Name</label>
      </div>

      <div className="form-floating mb-3 my-3 mx-3">
        <input
          type="email"
          name="email"
          className="form-control"
          id="floatingInput"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="floatingInput">Email</label>
      </div>

      <div className="form-floating mb-3 my-3 mx-3">
        <input
          type="tel"
          name="phone"
          className="form-control"
          id="floatingInput"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <label htmlFor="floatingInput">Phone</label>
      </div>

      <div className="form-floating mb-3 my-3 mx-3">
        <input
          type="text"
          name="address"
          className="form-control"
          id="floatingInput"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <label htmlFor="floatingInput">Address</label>
      </div>

      <button type="submit" className="btn btn-outline-primary my-3 mx-3">
        Save
      </button>
      <button
        type="button"
        className="btn btn-outline-danger my-3 mx-3"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default UserForm;
