//this is the filter div.
//if u click on any continent it leads u to a new path "/[continent]"
//and from there u only see countries that exist on that continent

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/style.scss';
// import { Link } from "react-router-dom";


function filterByRegion () {

    const filterByRegion = 
     <div className="container" id="filter" >

    <div className="dropdown">
        <button type="button" className=" dropdown-toggle" data-toggle="dropdown">
        Filter by Region
        </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="Africa">Africa</a>
        <a className="dropdown-item" href="/Americas">America</a>
        <a className="dropdown-item" href="/Asia">Asia</a>
        <a className="dropdown-item" href="/Europe">Europe</a>
        <a className="dropdown-item" href="/Oceania">Oceania</a>
        </div>
    </div>
</div>

return filterByRegion

}



export default filterByRegion;
