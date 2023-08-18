import React, { Fragment, /*useState,*/ useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { uiValue: state.uiValue + 1, showText: state.showText };
    case "DECREMENT":
      return { uiValue: state.uiValue - 1, showText: !state.showText };
    case "TOGGLESHOWTEXT":
      return { uiValue: state.uiValue, showText: !state.showText };
    case "RESET":
      return { uiValue: (state.uiValue = 0), showtext: !state.showText };
    default:
      return state;
  }
};

export const UseReducerHook = () => {
  //   const [uiValue, setUiValue] = useState(0);     //Commented text are useState code
  //   const [showText, setShowText] = useState(true);
  const [state, dispatch] = useReducer(reducer, { uiValue: 0, showText: true });

  //   const clickHereClickHandler = () => {
  //     setUiValue(uiValue + 1);
  //     setShowText(!showText);
  //   };

  return (
    <Fragment>
      <div>
        <p>UseReducer Hook and it's Function</p>
        <h1>{state.uiValue}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "TOGGLESHOWTEXT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          Reset
        </button>
        {/* <button onClick={clickHereClickHandler}>Click Here</button> */}
        {/* We can write two types of Ternary operator */}
        {/* {showText ? <p>This is an Even Number</p> : <p>This is an Odd Number</p>} */}
        {/* {showText && <p>This is an Even Number</p>}
      {!showText && <p>This is an Odd Number</p>} */}
        {state.showText && <p>This is an Even Number</p>}
        {!state.showText && <p>This is an Odd Number</p>}
      </div>
    </Fragment>
  );
};
