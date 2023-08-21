import React, { Fragment, useState, createContext } from "react";
import { Login } from "./Login";
import { User } from "./User";

export const AppContext = createContext(null);

export const UseContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "lightgreen",
          padding: "5px",
          margin: "5px",
        }}
      >
        <AppContext.Provider value={{ userName, setUserName }}>
          <h5>Use Context Hook and it's fucntion</h5>
          <Login />
          <User />
        </AppContext.Provider>
      </div>
    </Fragment>
  );
};
