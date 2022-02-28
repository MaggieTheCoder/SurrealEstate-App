import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const initialState = {
    alert: {
      message: "",
    },
  };
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/`)
      .then(({ data }) => {
        setProperties(data);
      })
      .catch((error) => {
        setAlert({
          message: "No Properties Found",
        });
        return error;
      });
  }, []);

  return (
    <div className="Properties">
      <Alert message={alert.message} />
      {!alert.message && (
        <div className="property-cards__page">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
