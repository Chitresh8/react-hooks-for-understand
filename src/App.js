import "./App.css";
import React from "react";
import { UseStateHook } from "./hooks/UseStateHook";
import { UseReducerHook } from "./hooks/UseReducerHook";

const App = () => {
  return (
    <div className="App">
      <h1>React Hooks and it's Functions</h1>
      <UseStateHook />
      <UseReducerHook />
    </div>
  );
};

export default App;
