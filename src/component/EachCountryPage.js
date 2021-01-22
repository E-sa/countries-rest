//from main route "/" if you click on any flag it leads you here "/[country-name]". 
//where u can see more details of that country.

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style/style.scss";

export default class Body extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div id="each-country-page">
        <img src={data.flag} style={{ width: "30vw" }} />
        <div id="right-side">
          <h2>{data.name}</h2>
          <div id="eight-country-details">
            <div>
              <p>
                Native Name: <p>{data.nativeName}</p>{" "}
              </p>
              <p>
                Population: <p>{data.population}</p>{" "}
              </p>
              <p>
                Region: <p>{data.region}</p>
              </p>
              <p>
                Sub Region: <p>{data.subregion}</p>
              </p>
              <p>
                Capital: <p>{data.capital}</p>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <p>{data.topLevelDomain}</p>
              </p>
              <p>
                Currencies: <p>{data.currencies[0]["code"]}</p>
              </p>
              <p>
                Languages:
                <p>
                  {data.languages.map((result, index) => {
                    return <p>{result["name"]},</p>;
                  })}
                </p>
              </p>
            </div>
          </div>
          <div id="border-countries">
            <p>Border Countries: </p>
            <div>
              {data.borders.map((result, index) => {
                return <div>{result}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
