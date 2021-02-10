//search input is here
//type anything and it send what u have typed to App.js

import React from "react";
import "../style/style.scss";

export default function SearchInput({ onSearch }) {
  return (
    <div id="search-input">
      <label>
        <input
          type="text"
          placeholder="Search for a country... "
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </div>
  );
}
