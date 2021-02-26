import React from "react";

function Header (props) {


    return (
        <div className="Jumbotron">
            <div className="row">
                <div className="col-4">
                    <h1>Employee Database</h1>
                </div>
                <div className="col-8">
                <form>
                        <label for="search">Search for Employees by Name</label>
                        <input name="search" type="text" onChange={props.handleChange} />
                    </form>
                </div>
            </div>
            

        </div>
    );
}

export default Header;