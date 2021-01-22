import React from "react";
import Header from "./component/header";
import SearchInput from "./component/SearchInput";
//filter box
import FilterByRegion from "./component/FilterByRegion";
//it makes list of all countrid in mail route
import Body from "./component/Body";
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
      
    };
  }



  //what it does?
  //1. fetch data from URL
  //2. makes 5 diffrent var and filter countries based on their continent 
  //3. receive what u have typed on input and filter results.
  country(childData) {
    const URL = "https://restcountries.eu/rest/v2/all";
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        //1. all the countries are saved inside this.state.country
        this.setState({
          country: data
        });

        //2. here we have the 5 continents
        let asia = data.filter(function(e){
          return e.region === 'Asia'            
        })
         
        let africa = data.filter(function(e){
          return e.region === 'Africa'            
        })
         
        let americas = data.filter(function(e){
          return e.region === 'Americas'            
        })
        let europe = data.filter(function(e){
          return e.region === 'Europe'            
        })
        let oceania = data.filter(function(e){
          return e.region === 'Oceania'            
        })
         
        this.setState({
          Asia: asia,
          Africa: africa,
          Americas: americas,
          Europe: europe,
          Oceania: oceania
        });

        //3. if u type any thing it filters results.
        if(childData){
          let LC = childData.toLowerCase()
          console.log(LC)
          let searchTerm = data.filter(function(e){
           return e.name.toLowerCase().startsWith(LC)         
          })
          this.setState({
            country: searchTerm
          })
        }

      }

      )

   

      .catch((err) => {
        if (err) console.error("cant fetch country data from API, ", err);
      });
  }

  componentDidMount() {
    this.country();
  }

  //it handles callback from search input
  handleCallback = (childData) =>{
    this.country(childData)
  }


  render() {

    const { country, Asia, Americas, Europe, Oceania, Africa } = this.state;
    

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
                  <Route path={`/${result.name}`} key={index} >
                    <div key={index}>
                      <Back />
                      <Each data={result} />
                    </div>
                  </Route>
                );
              })}

              {/* //route #2: it makes 5 diffrent routes for each continent */}
              <Route path='/Africa'>
                <Back />
                <Body country={Africa} />
              </Route>
              <Route path='/Asia'>
                <Back />
                <Body country={Asia} />
              </Route>
              <Route path='/Americas'>
                <Back />
                <Body country={Americas} />
              </Route>
              <Route path='/Oceania'>
                <Back />
                <Body country={Oceania} />
              </Route>
              <Route path='/Europe'>
                <Back />
                <Body country={Europe} />
              </Route>
              {/* route #3: main route '/'. it includes search input,
              filter box and the list of all countries */}
              <Route path="">
                <div id="search-filter-container">
                  <div>
                    <SearchInput parentCallback = {this.handleCallback} />
                  </div>
                  <div>
                    <FilterByRegion country={country} />
                  </div>
                </div>
                <Body country={country} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
