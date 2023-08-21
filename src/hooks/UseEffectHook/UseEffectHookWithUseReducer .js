import React, { Fragment, useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "APICALLDATA":
      return {
        apiCallData: state.apiCallData,
        numeralCount: state.numeralCount + 1,
      };
    case "NUMERALCOUNT":
      return {
        apiCallData: state.apiCallData,
        numeralCount: state.numeralCount,
      };
    case "RESETVALUE":
      return {
        apiCallData: state.apiCallData,
        numeralCount: (state.numeralCount = 0),
      };
  }
};

export const UseEffectHookWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    apiCallData: [],
    numeralCount: 0,
  });
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      state.apiCallData(response.apiCallData.slice(0, 100).title);
      console.log("data");
      console.log(response, "RESP");
    });
  }, []);
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#DCC3FC",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>UseEffect Hook and it's Function</h5>
        <h1>{state.apiCallData}</h1>
        <h1>{state.numeralCount}</h1>
        <button
          onClick={() => {
            dispatch({ type: "NUMERALCOUNT" });
            dispatch({ type: "APICALLDATA" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESETVALUE" });
          }}
        >
          Reset
        </button>
      </div>
    </Fragment>
  );
};
