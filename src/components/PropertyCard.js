import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/PropertyCard.css";
import {
  faBed,
  faBath,
  faEnvelope,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="property-card">
      <p>{title} </p>
      <p>
        {type}-{city}
      </p>
      <p>
        <FontAwesomeIcon icon={faBed} alt="Bedrooms" className="icon" />
        {bedrooms}
      </p>

      <p>
        <FontAwesomeIcon icon={faBath} alt="Bathrooms" className="icon" />
        {bathrooms}
      </p>
      <p>
        <FontAwesomeIcon icon={faSterlingSign} className="icon" />
        {price}
      </p>
      <p>
        <a className="email-link" href={`mailto:${email}`}>
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          Send email
        </a>
      </p>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
