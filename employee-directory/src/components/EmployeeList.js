import React from "react";

function EmployeeList(props) {
    console.log(props);
    
            // props."array".map
    return (
        <ul>
            <li>
                <div className="row">
                    <div className="col-2">
                        <img src={props.employeeArray[0].image} alt="Employee Image" />
                    </div>
                </div>
            </li>
        </ul>
    );

}

export default EmployeeList;