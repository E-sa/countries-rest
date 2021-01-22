//this is the filter div.
//if u click on any continent it leads u to a new path "/[continent]"
//and from there u only see countries that exist on that continent

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/style.scss';
import { Link } from "react-router-dom";


function filterByRegion () {

    const filterByRegion = 
     <div className="container" id="filter" >

    <div className="dropdown">
        <button type="button" className=" dropdown-toggle" data-toggle="dropdown">
        Filter by Region
        </button>
        <div className="dropdown-menu">
        <Link className="dropdown-item" to="Africa">Africa</Link>
        <Link className="dropdown-item" to="/Americas">America</Link>
        <Link className="dropdown-item" to="/Asia">Asia</Link>
        <Link className="dropdown-item" to="/Europe">Europe</Link>
        <Link className="dropdown-item" to="/Oceania">Oceania</Link>
        </div>
    </div>
</div>

return filterByRegion

}



export default filterByRegion;