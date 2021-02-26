import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import EmployeeListItem from "./components/EmployeeListItem";
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
    var numResults = 20;
    axios("https://randomuser.me/api/?results="+numResults)
      .then(({ data }) => {
        var stateArr = [{
          image: "",
          name: "",
          phone: "",
          email: "",
          dob: ""
        }];
        for (var i=0; i<numResults; i++) {
          console.log(data.results);
          var stateObj = {
            image: data.results[i].picture.thumbnail,
            name: data.results[i].name.first + " " + data.results[i].name.last,
            phone: data.results[i].phone,
            email: data.results[i].email,
            dob: data.results[i].dob.date
          };
          console.log(stateObj);
          stateArr.push(stateObj);
          console.log(stateArr);
        }
        console.log(stateArr);
        setState(stateArr);

        
        console.log(state);
      });

  }, []);

  return (
    <div>
      {state.map(obj => {
        return <EmployeeListItem employeeArray={obj} />
      })}
    </div>
  );
}

export default App;
