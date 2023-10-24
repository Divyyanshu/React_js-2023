// var React = require('react');
// var ReactDOM = require('react-dom');

import React from "react";
import ReactDOM from "react-dom";
const a = 2023;
const name = "divyanshu"
const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()
ReactDOM.render(
    
  <fragment>
    <h1>{`Netflix Owner ${name}`}</h1>
    <p>Current date = {currentDate}</p>
    <p>Current date = {currentTime}</p>
    <p>
      5 Netflix Top Movies
    </p>
    <ol>
      <li>Bloody Daddy {a}</li>
      <li>Veer Jara</li>
      <li>Gadar</li>
      <li>RaniGanj</li>
      <li>Ganpat</li>
    </ol>
  </fragment>,
  document.getElementById("root")
);

// pure js vanilla script
// var h1 = document.createElement('h4');
// h1.innerHTML = "D.r TAILORS"
// document.getElementById('root').appendChild(h1)
