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
        <li>
            <div className="row">
                <div className="col-2 border">
                    <img src={listState.data.image || ""} alt="Employee Image" />
                </div>
                <div className="col-2 border">
                    <p>{listState.data.name}</p>
                </div>
                <div className="col-2 border">
                    <p>{listState.data.phone}</p>
                </div>
                <div className="col-2 border">

                    <p><a href={"mailto: "+listState.data.email}>{listState.data.email}</a></p>
                </div>
                <div className="col-2 border">
                    <p>{listState.data.dob}</p>
                </div>                    
            </div>
        </li>
    );

}

export default EmployeeListItem;