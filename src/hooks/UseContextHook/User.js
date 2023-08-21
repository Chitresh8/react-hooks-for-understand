import React, { Fragment, useContext } from "react";
import { AppContext } from "./UseContextHook";

export const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <Fragment>
      <h4>User:{userName}</h4>
    </Fragment>
  );
};
