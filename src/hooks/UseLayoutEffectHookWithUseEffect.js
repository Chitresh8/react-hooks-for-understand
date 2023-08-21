import React, { Fragment, useLayoutEffect, useEffect, useRef } from "react";

export const UseLayoutEffectHookWithUseEffect = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("UseLayoutEffect");
    inputRef.current.value = "Hello";
  }, []);
  useLayoutEffect(() => {
    console.log("UseEffect", inputRef.current.value);
  }, []);

  const inputChangeHandler = () => {
    inputRef.current.focus();
  };

  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#E706F6",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>Use LayoutEffect and it's Function</h5>
        <input
          ref={inputRef}
          value="Chitresh"
          style={{ width: "400px", height: "100px" }}
          onChange={inputChangeHandler}
        />
      </div>
    </Fragment>
  );
};
