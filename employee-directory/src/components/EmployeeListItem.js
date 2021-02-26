import React, { useEffect, useState } from "react";

function EmployeeListItem(props) {
    const [listState, setListState] = useState({
        state: "LOADING",
        data: {}
    });

    useEffect(() => {
        if (!props.employeeArray) {
            console.log(listState);
            return (<li>
                <p>Loading</p>
            </li>);
        } else if (listState.state) {
            if (listState.state==="LOADING") {
                setListState({state: "LOADED", data: props.employeeArray});
                console.log(props.employeeArray);
            }

        }

    });
    
            // props."array".map
    if (props.employeeArray) {
       
    }
    return (
        <ul>
            <li>
                <div className="row">
                    <div className="col-2">
                        <img src={listState.data.image || ""} alt="Employee Image" />
                    </div>
                        <p>{listState.data.name}</p>
                        <p>{listState.data.email}</p>
                        <p>{listState.data.phone}</p>
                        <p>{listState.data.dob}</p>
                </div>
            </li>
        </ul>
    );

}

export default EmployeeListItem;