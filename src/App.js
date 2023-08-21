import "./App.css";
import React from "react";
import { UseStateHook } from "./hooks/UseStateHook";
import { UseReducerHook } from "./hooks/UseReducerHook";
import { UseEffectHookWithUseState } from "./hooks/UseEffectHook/UseEffectHookWithUseState";
import { UseRefHook } from "./hooks/UseRefHook";
import { UseLayoutEffectHookWithUseEffect } from "./hooks/UseLayoutEffectHookWithUseEffect";
import { UseImperativeHandleHook } from "./hooks/UseImperativeHandleHook/UseImperativeHandleHook";
import { UseContextHook } from "./hooks/UseContextHook/UseContextHook";
import { UsecontextHookWithProps } from "./hooks/UseContextHook/UseContextHookWithProps";
import { UseMemoHook } from "./hooks/UseMemoHook";
import { UseCallbackHook } from "./hooks/UseCallbackHook/UseCallbackHook";

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
      <UseContextHook />
      <UsecontextHookWithProps />
      <UseMemoHook />
      <UseCallbackHook />
    </div>
  );
};

export default App;
