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
              {props.name}
          </div>
          <div className="col-3 userPhone">
              {props.phone}
          </div>
          <div className="col-3 userEmail">
              {props.email}
          </div>
          <div className="col-2 userDob">
              {props.dob}
          </div>
      </div>
  </div>

                
    )
}

export default EmployeeRow;