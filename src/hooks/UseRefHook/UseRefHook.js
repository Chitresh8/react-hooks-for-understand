import React, { Fragment, useRef } from "react";
import { AnotherExofUseRefHook } from "./AnotherExofUseRefHook";

export const UseRefHook = () => {
  const inputRef = useRef(null);

  const changeNameClickHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#FCDCDC",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>UseRef Hook and it's Function</h5>
        <h5>It is an uncontrolled component</h5>
        <input
          type="text"
          placeholder="Ex..."
          ref={inputRef}
        />
        <button onClick={changeNameClickHandler}>Change Name</button>
        <div>
          <AnotherExofUseRefHook />
        </div>
      </div>
    </Fragment>
  );
};
