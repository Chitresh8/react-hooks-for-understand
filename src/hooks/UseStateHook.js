import React, { Fragment, useState } from "react";

export const UseStateHook = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [inputValue, setInputValue] = useState("chitresh");

  const incrementClickHandler = () => {
    setFirstValue(firstValue + 1);
  };
  const decrementClickHandler = () => {
    setFirstValue(firstValue - 1);
  };

  const inputOnChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "skyblue",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>UseState Hook and it's Function</h5>
        <h1>{firstValue}</h1>
        <button onClick={incrementClickHandler}>Increment</button>
        <button onClick={decrementClickHandler}>Decrement</button>
        <div>
          <input
            value={inputValue}
            type="text"
            placeholder="enterSomething..!"
            onChange={inputOnChangeHandler}
          />
          {inputValue}
        </div>
      </div>
    </Fragment>
  );
};
