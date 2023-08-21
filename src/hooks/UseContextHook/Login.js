import React, { Fragment, useContext } from "react";
import { AppContext } from "./UseContextHook";

export const Login = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <Fragment>
      <p>Login</p>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </Fragment>
  );
};
