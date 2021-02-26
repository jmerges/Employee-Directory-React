import React, { useEffect, useState } from "react";

function EmployeeListItem(props) {
    const [listState, setListState] = useState({
        state: "LOADING",
        data: {}
    });

    useEffect(() => {
        if (!props.employeeArray[1]) {
            console.log(listState);
            return (<li>
                <p>Loading</p>
            </li>);
        }

        console.log(listState);
        setListState({state: "LOADED", data: props.employeeArray[1]});
    });
    
            // props."array".map
    return (
        <ul>
            <li>
                <div className="row">
                    <div className="col-2">
                        {/* <img src={listState.data.image || ""} alt="Employee Image" /> */}
                        <img src={""} alt="Employee Image" />
                    </div>
                        <p>{props.employeeArray}</p>
                </div>
            </li>
        </ul>
    );

}

export default EmployeeListItem;