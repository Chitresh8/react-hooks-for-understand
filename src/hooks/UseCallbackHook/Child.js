import React, { Fragment, useEffect } from "react";

export const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  return (
    <Fragment>
      {returnComment("Chitresh..!")}
      {/* <p>
        Here the name parameter passed from useCallbackHook to child component{" "}
      </p> */}
      <p>
        Before, keeping the useCallback hook in the useCallbackHook.js, while
        clicking the Toggle button, it rerenders so many times in console.
      </p>
      <p>
        useCallback advantage is that it will stores the function and returns
        the value of the function without rerendered.
      </p>
    </Fragment>
  );
};
