import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import EmployeeListItem from "./components/EmployeeListItem";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [state, setState] = useState([{
    image: "",
    name: "",
    phone: "",
    email: "",
    dob: ""
  }]);

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    var numResults = 10;
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
            image: data.results[i].picture.large,
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
        setFilter(stateArr);

        
        console.log(state);
      });

  }, []);

  function handleChange(event) {
    event.preventDefault();
    var input = event.target.value.toLowerCase();
    var filterArr = [];
    for (var i=0; i<state.length; i++) {
      var lowerCaseName = state[i].name.toLowerCase();
      if (lowerCaseName.includes(input)) {
        filterArr.push(state[i]);
      }
    }
    setFilter(filterArr);
  }

  function nameSort() {
    var workArr = filter;
    let i, key, j;  
    for (i = 1; i < workArr.length; i++) 
    {  
        key = workArr[i];  
        j = i - 1;  
   
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && workArr[j].name > key.name) 
        {  
            workArr[j + 1] = workArr[j];  
            j = j - 1;  
        }  
        workArr[j + 1] = key;  
    }
    console.log(workArr);
    setFilter(workArr);
    return
  }

  return (
    <div className="bg-dark text-white text-center">
      <Header handleChange={handleChange} />
      <ul>
        <div className="row">
          <div className="col-2">
            <h3>Picture</h3>
          </div>
          <div className="col-2">
            <h3 onClick={() => nameSort()}>Name</h3>
          </div>
          <div className="col-2">
            <h3>Phone</h3>
          </div>
          <div className="col-2">
            <h3>Email</h3>
          </div>
          <div className="col-2">
            <h3>DOB</h3>
          </div>
        </div>
      {filter.map(obj => {
        return <div><EmployeeListItem employeeArray={obj} /><br /></div>
      })}
      </ul>
    </div>
  );
}

export default App;
