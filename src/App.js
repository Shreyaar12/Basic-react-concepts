import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Condn from "./condn";
import Tutorial from "./Tutorial";
import Welcome from "./prop";
import Example from "./state";

function App() {
  return (
    <React.Fragment>
      {/* React's original code */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* To explain React.Fragments */}
      {/* <Tutorial /> */}
      {/* To explain Conditional Rendering */}
      {/* <Condn /> */}
      {/* To explain Props */}
      {/* <Welcome /> */}
      {/* To explain state in React */}
      {/* <Example /> */}
    </React.Fragment>
  );
}

export default App;
