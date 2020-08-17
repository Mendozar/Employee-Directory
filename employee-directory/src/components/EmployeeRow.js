import React from 'react';

function EmployeeRow(props) {
    // console.log(props.children)
    return ( 
        <div className="card">
        {/* <div className="img-container">
        </div> */}
        <div className="content">
          <ul>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            {/* <li>
              <strong>Name:</strong> {props.firstName} {props.lastName}
            </li> */}
            <li>
              <strong>Location:</strong> {props.gender}
            </li>
            <li>
                Cel: {props.cell}
            </li>
          </ul>
        </div>
      </div>
  
                
    )
}

export default EmployeeRow;