import React from "react";
import Header from "./component/header";
import SearchInput from "./component/SearchInput";
//filter box(div)
import FilterByRegion from "./component/FilterByRegion";
//it makes list of all countries in main route
import Countries from "./component/Countries";
//more datails about each country
import Each from "./component/EachCountryPage";
//back button
import Back from "./component/Back";
import "./style/style.scss";

import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      backupCountry: [],
    };
  }

  //what it does?
  //1. fetch data from URL
  //2. receive what u have typed on input and filter results.
  country(childData) {
    const URL = "https://restcountries.eu/rest/v2/all";
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        //1. all the countries are saved inside this.state.country and this.state.backupcountry
        this.setState({
          country: data,
          backupCountry: data,
        });

        //2. if u type any thing it filters results.
        if (childData) {
          let LC = childData.toLowerCase();
          let searchTerm = data.filter(function (e) {
            return e.name.toLowerCase().startsWith(LC);
          });
          this.setState({
            country: searchTerm,
          });
        }
      })

      .catch((err) => {
        if (err) console.error("cant fetch country data from API, ", err);
      });
  }

  //this function gets which region u clicked and filters backupcountry
  filterRegion = (region) => {
    
    if(region==="all"){
      this.setState({ country: this.state.backupCountry });
    }
    else{
    const continent = this.state.backupCountry.filter(function (e) {
      return e.region === region;
    });

    this.setState({ country: continent });

  }
};

  componentDidMount() {
    this.country();
  }

  unsetState = () => {
    this.setState({ country: this.state.backupCountry });
  };
  //it handles callback from search input
  handleCallback = (childData) => {
    this.country(childData);
  };

  render() {
    const { country } = this.state;

    return (
      <div>
        <Header />

        <BrowserRouter>
          <Switch>
            {country &&
              country.map((result, index) => {
                return (
                  //route 1#: when u click on country flags it
                  //leads u to new path and show u more details
                  <Route
                    path={`/${result.name.replace(/\s/g, "")}`}
                    key={index}
                  >
                    <div>
                      <Back unsetState={this.unsetState} />
                      <Each data={result} />
                    </div>
                  </Route>
                );
              })}


            {/* route #2: main route '/'. it includes search input,
              filter box and the list of all countries */}
            <Route path="">
              <div id="search-filter-container">
                <div>
                  <SearchInput parentCallback={this.handleCallback} />
                </div>
                <div>
                  <FilterByRegion
                    country={country}
                    onClickFilterRegion={this.filterRegion}
                  />
                </div>
              </div>
              <Countries country={country} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
