import React from "react";
import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
};
