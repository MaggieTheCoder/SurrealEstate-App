import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Flat for Sale",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 2,
    price: 150000,
    city: "Manchester",
    email: "maggie@gmail.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
