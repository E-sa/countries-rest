//  this component gets data of the countries from App.js 
// and render all countries with their pictures

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style/style.scss";

import { Link } from "react-router-dom";

export default class Body extends React.Component {
  render() {
    return (
      <div id="body">
        <div className="container">
          {this.props.country &&
            this.props.country.map((result, index) => {
              return (
                <div className="card" key={index}>
                  <Link to={result.name}>
                    <img
                      className="card-img-top"
                      src={result.flag}
                      alt={index}
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">{result.name}</h4>
                    <div>
                      <span className="card-text">
                        <h6>population:</h6> {result.population}
                      </span>
                      <span className="card-text">
                        <h6>region:</h6> {result.region}
                      </span>
                      <span className="card-text">
                        <h6>capital:</h6> {result.capital}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
