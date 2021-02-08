//each country in main route is also a component.


import React from "react";
import { Link } from "react-router-dom";

export default function Country({
  name,
  flag,
  index,
  population,
  region,
  capital,
}) {
  return (
    <div className="card" >
      <Link to={name.replace(/\s/g, "")}>
        <img className="card-img-top" src={flag} alt={index} />
      </Link>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <div>
          <div className="card-text">
            <h6>population:</h6> {population}
          </div>
          <div className="card-text">
            <h6>region:</h6> {region}
          </div>
          <div className="card-text">
            <h6>capital:</h6> {capital}
          </div>
        </div>
      </div>
    </div>
  );
}
