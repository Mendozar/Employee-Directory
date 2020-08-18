import React from "react"

function SearchBox(props) {
    return (
        <div>
            <input 
            onChange={props.handleInput} 
            type="text"
            placeholder="Search for Employee"/>
        </div>
    )
}

export default SearchBox;