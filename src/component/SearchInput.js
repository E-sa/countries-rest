//search input is here
//type anything and it send what u have typed to App.js 
//and from there and inside axios the results will be filtered 


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../style/style.scss'


class SearchInput extends React.Component {

    state={
        searchTerm:''
    }

    editSearchTerm = (event) => {

        this.setState({searchTerm:event.target.value})
        this.props.parentCallback(event.target.value);
        event.preventDefault();
    }

    render(){
        return(
            <div id="search-input">
            <label>
             <input type="text" value={this.state.searchTerm} placeholder="Search for a country... " onChange={this.editSearchTerm} />
            </label>
            </div>
        )
    }
}



export default SearchInput;
