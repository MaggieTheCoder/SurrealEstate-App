import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "",
      type: "",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then((response) => {
        setAlert({ message: "Property added", isSuccess: true });
        return response;
      })

      .catch((error) => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
        return error;
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      Add a Property:
      <br />
      <fieldset>
        <form onSubmit={handleAddProperty} className="add-property__form">
          <Alert message={alert.message} success={alert.isSuccess} />
          <div className="search-criteria__columnOne">
            <label htmlFor="title">
              Title: <br />
              <input
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
            <br />
            <label htmlFor="city">
              City: <br />
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
            <br />
            <label htmlFor="type">
              Type: <br />
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
            <br />
            <label htmlFor="bedrooms">
              Number of Bedrooms: <br />
              <input
                id="bedrooms"
                name="bedrooms"
                type="number"
                min="1"
                max="10"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>

            <br />

            <label htmlFor="bathrooms">
              Number of bathrooms: <br />
              <input
                id="bathrooms"
                name="bathrooms"
                type="number"
                min="1"
                max="10"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
            <br />
            <label htmlFor="price">
              Price: <br />
              <input
                id="price"
                name="price"
                type="number"
                placeholder="e.g £240,000"
                value={fields.price}
                onChange={handleFieldChange}
              />
              <br />
            </label>
            <label htmlFor="email">
              Email: <br />
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                placeholder="bojangles@gmail.com"
                onChange={handleFieldChange}
              />
            </label>
            <br />
            <div>
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AddProperty;
