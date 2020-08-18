import React from "react";
import "../styles/SearchBox.css"

function SearchBox(props) {
    return (
        <div className="search">
            <input 
            placeholder="Search for Employee"
            type="search"
            onChange={props.handleInput} 
            />
        </div>
    )
}

export default SearchBox;