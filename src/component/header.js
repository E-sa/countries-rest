//header as it says.

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/style.scss'
import DarkMode from "./Darkmode"

function header () {

    const header = 
        <div id="header-container" className="d-flex justify-content-between">
            <p>Where in the world?</p>

            <div>
                <div id="moon-image"></div>
                <DarkMode />
                </div>

        </div>

    return header
}


export default header;