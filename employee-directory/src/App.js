import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import axios from "axios";

function App() {
  const [state, setState] = useState([{
    image: "",
    name: "",
    phone: "",
    email: "",
    dob: ""
  }]);

  useEffect(() => {
    for (var i=0; i<1; i++) {
    axios("https://randomuser.me/api/")
      .then(({ data }) => {
        console.log(data.results);
        var stateObj = {
          image: data.results[0].picture.thumbnail,
          name: data.results[0].name.first + " " + data.results[0].name.last,
          phone: data.results[0].phone,
          email: data.results[0].email,
          dob: data.results[0].dob.date
        };
        
        console.log(stateObj);
        setState([...state, stateObj]);
      });
    }
    console.log(state);
  }, []);

  return (
    <div>
      <EmployeeList employeeArray={state} />
    </div>
  );
}

export default App;
