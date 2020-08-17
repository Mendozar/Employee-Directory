import React from 'react';

function EmployeeRow(props) {
    console.log(props.results)
    return ( 
        <div>

            {props.results.map((result, index) => (
                // console.log('name', result.name)
                
                <li key={index}>
                    email: {result.email}

                </li>
                
            ))}
        </div>
    )
}

export default EmployeeRow;