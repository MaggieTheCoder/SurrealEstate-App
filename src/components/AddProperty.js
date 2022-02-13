import { React, useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "Number of bedrooms",
      bathrooms: "1",
      MaximumPrice: "No max",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState);
  const handleAddProperty = (event) => {
    event.preventDefault();
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  // eslint-disable-next-line
  console.log(fields);
  return (
    <div className="AddProperty">
      Add a Property:
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label htmlFor="city">
          City:
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
          Type:
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
          Number of Bedrooms:
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="0">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <label htmlFor="bathrooms">
          Number of bathrooms:
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <label htmlFor="price">
          Max Price:
          <select
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          >
            <option value="50000">50,000</option>
            <option value="60000">60,000</option>
            <option value="70000">70,000</option>
            <option value="80000">80,000</option>
            <option value="90000">90,000</option>
            <option value="100000">100,000</option>
            <option value="110000">110,000</option>
            <option value="120000">120,000</option>
            <option value="125000">125,000</option>
            <option value="130000">130,000</option>
            <option value="140000">140,000</option>
            <option value="150000">150,000</option>
            <option value="160000">160,000</option>
            <option value="170000">170,000</option>
            <option value="175000">175,000</option>
            <option value="180000">180,000</option>
            <option value="190000">190,000</option>
            <option value="200000">200,000</option>
            <option value="210000">210,000</option>
            <option value="220000">220,000</option>
            <option value="230000">230,000</option>
            <option value="240000">240,000</option>
            <option value="250000">250,000</option>
            <option value="260000">260,000</option>
            <option value="270000">270,000</option>
            <option value="280000">280,000</option>
            <option value="290000">290,000</option>
            <option value="300000">300,000</option>
            <option value="325000">325,000</option>
            <option value="350000">350,000</option>
            <option value="375000">375,000</option>
            <option value="400000">400,000</option>
            <option value="425000">425,000</option>
            <option value="450000">450,000</option>
            <option value="475000">475,000</option>
            <option value="500000">500,000</option>
            <option value="550000">550,000</option>
            <option value="600000">600,000</option>
            <option value="650000">650,000</option>
            <option value="700000">700,000</option>
            <option value="800000">800,000</option>
            <option value="900000">900,000</option>
            <option value="1000000">1,000,000</option>
            <option value="1250000">1,250,000</option>
            <option value="1500000">1,500,000</option>
            <option value="1750000">1,750,000</option>
            <option value="2000000">2,000,000</option>
            <option value="2500000">2,500,000</option>
            <option value="3000000">3,000,000</option>
            <option value="4000000">4,000,000</option>
            <option value="5000000">5,000,000</option>
            <option value="7500000">7,500,000</option>
            <option value="10000000">10,000,000</option>
            <option value="15000000">15,000,000</option>
            <option value="20000000">20,000,000</option>
            <option value="">No min</option>
          </select>
          <br />
        </label>
        <label htmlFor="email">
          Email address:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="bojangles@gmail.com"
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
