import React, { Fragment, useState, useCallback } from "react";
import axios from "axios";
import { Child } from "./Child";

export const UseCallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Code is pushed to Github.....!!!!!");

  //   const returnComment = () => {
  //     return data;
  //   }; //Before using Callback function

  const returnComment = useCallback(
    ///After writing UseCallback function, passed the parameter 'name' and in dependency, added data function.In Return added data + name.
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#D3FCFC",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5> useCallback Hook and it's Function</h5>
        <Child returnComment={returnComment} />
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
        {toggle && <h1>Toggle Clicked</h1>}
        {!toggle && <h1>Toggle Not Clicked</h1>}
      </div>
    </Fragment>
  );
};
