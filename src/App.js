import "./App.css";
import React from "react";
import { UseStateHook } from "./hooks/UseStateHook";
import { UseReducerHook } from "./hooks/UseReducerHook";
import { UseEffectHookWithUseState } from "./hooks/UseEffectHookWithUseState";
import { UseRefHook } from "./hooks/UseRefHook";
import { UseLayoutEffectHookWithUseEffect } from "./hooks/UseLayoutEffectHookWithUseEffect";
import { UseImperativeHandleHook } from "./hooks/UseImperativeHandleHook";

const App = () => {
  return (
    <div className="App">
      <h1>React Hooks and it's Functions</h1>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHookWithUseState />
      <UseRefHook />
      <UseLayoutEffectHookWithUseEffect />
      <UseImperativeHandleHook />
    </div>
  );
};

export default App;
