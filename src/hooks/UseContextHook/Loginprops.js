import React, { Fragment } from "react";

export const Loginprops = ({ setUsername }) => {
  return (
    <Fragment>
      <p>LogIn</p>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </Fragment>
  );
};
