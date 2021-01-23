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
        <img src={data.flag} style={{ width: "30vw",height:"30vw" }} alt='flag' />
        <div id="right-side">
          <h2>{data.name}</h2>
          <div id="eight-country-details">
            <div>
              <p>
                Native Name: <span>{data.nativeName}</span>
              </p>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Sub Region: <span>{data.subregion}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{data.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{data.currencies[0]["code"]}</span>
              </p>
              <p>
                Languages:
                <span>
                  {data.languages.map((result, index) => {
                    return <span key={index} >{result["name"]},</span>;
                  })}
                </span>
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
