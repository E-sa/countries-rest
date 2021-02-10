import React from "react";
import Header from "./component/header";
import SearchInput from "./component/SearchInput";
import FilterByRegion from "./component/FilterByRegion";
import Countries from "./component/Countries";
import Each from "./component/EachCountryPage";
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
  country(childData) {
    const URL = "https://restcountries.eu/rest/v2/all";
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        //1. all the countries are saved inside state.Country and state.backupCountry
        this.setState({
          country: data,
          backupCountry: data,
        });

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


  // when u click back butten it resest state.
  unsetState = () => {
    this.setState({ country: this.state.backupCountry });
  };


  //gets the searched term from searchInput.js and displays proper results
  search = (searchTerm) => {

        if(searchTerm){
          console.log(searchTerm)
          let LC = searchTerm.toLowerCase();
          let findCountries = this.state.backupCountry.filter(function (e) {
            return e.name.toLowerCase().startsWith(LC);
          });
          this.setState({
            country: findCountries,
          });
        
  }
}
 
componentDidMount() {
    this.country();
  }


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
                  <SearchInput parentCallback={this.handleCallback} onSearch={this.search} />
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
