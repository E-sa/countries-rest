//this is the back button when ever its clicked it leads you to the main route "/";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style/style.scss";

// import {  Link } from "react-router-dom";

function header() {
  const header = (
    <a href="/">
      <button
        style={{
          margin: "40px 7% 30px 7%",
          padding: "8px 40px",
        }}
        id="back"
      >
        Back
      </button>
    </a>
  );

  return header;
}

export default header;


