import React, { Fragment, useRef } from "react";

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
        <input
          type="text"
          placeholder="Ex..."
          ref={inputRef}
        />
        <button onClick={changeNameClickHandler}>Change Name</button>
      </div>
    </Fragment>
  );
};
