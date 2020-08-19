import React from 'react';
import "../styles/EmployeeRow.css";

function EmployeeRow(props) {
    return ( 
      <div className="container">
      <div className="row">
          <div className="col-2 userImg">
            <img src={props.img} alt={props.dob}/>
          </div>
          <div className="col-2 userName">
              <p>
                {props.name}
              </p>
          </div>
          <div className="col-3 userPhone">
            <p>
              {props.phone}
            </p>
          </div>
          <div className="col-3 userEmail">
            <p>
              <a href={"mailto:" + props.email} target="__blank">
                {props.email}
              </a>
                
            </p>
          </div>
          <div className="col-2 userDob">
            <p>
              {props.dob}
            </p>
          </div>
      </div>
  </div>

                
    )
}

export default EmployeeRow;