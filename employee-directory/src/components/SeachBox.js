import React from "react";
import "../styles/SearchBox.css"

function SearchBox(props) {
    return (
        <div className="search">
            <input 
            onChange={props.handleInput} 
            type="text"
            placeholder="Search for Employee"/>
        </div>
    )
}

export default SearchBox;