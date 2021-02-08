//  this component gets data of the countries from App.js

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style/style.scss";
import Country from "./Country";

export default function Countries({ country }) {
  return (
    <div id="body">
      <div className="container">
        {country &&
          country.map((result, index) => {
            return (
              <Country
                key={index}
                name={result.name}
                flag={result.flag}
                index={index}
                population={result.population}
                region={result.region}
                capital={result.capital}
              />
            );
          })}
      </div>
    </div>
  );
}
