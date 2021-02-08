//this is the filter div.
//if u click on any continent it leads u to a new path "/[continent]"
//and from there u only see countries that exist on that continent

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/style.scss';
import { Link } from "react-router-dom";


function filterByRegion ({onClickFilterRegion}) {

    const filterByRegion = 
     <div className="container" id="filter" >

    <div className="dropdown">
        <button type="button" className=" dropdown-toggle" data-toggle="dropdown">
        Filter by Region
        </button>
        <div className="dropdown-menu">
        <Link className="dropdown-item" to="/" onClick={()=>onClickFilterRegion("all")} >All</Link>
        <Link className="dropdown-item" to="Africa" onClick={()=>onClickFilterRegion("Africa")} >Africa</Link>
        <Link className="dropdown-item" to="/Americas" onClick={()=>onClickFilterRegion("Americas")}>America</Link>
        <Link className="dropdown-item" to="/Asia" onClick={()=>onClickFilterRegion("Asia")}>Asia</Link>
        <Link className="dropdown-item" to="/Europe" onClick={()=>onClickFilterRegion("Europe")}>Europe</Link>
        <Link className="dropdown-item" to="/Oceania" onClick={()=>onClickFilterRegion("Oceania")}>Oceania</Link>
        </div>
    </div>
</div>

return filterByRegion

}



export default filterByRegion;
