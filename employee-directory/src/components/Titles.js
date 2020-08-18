import React from "react";
import "../styles/Titles.css"

function Titles() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-2 image">
                Image
            </div>
            <div className="col-2 name">
                Name
            </div>
            <div className="col-3 phone">
                Phone
            </div>
            <div className="col-3 email">
                Email
            </div>
            <div className="col-2 dob">
                Date of Birth
            </div>
        </div>
    </div>

    )
} 

export default Titles;