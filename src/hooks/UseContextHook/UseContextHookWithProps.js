import React, { Fragment, useState } from "react";
import { Loginprops } from "./Loginprops";
import { Userprops } from "./Userprops";

export const UsecontextHookWithProps = () => {
  const [username, setUsername] = useState("");
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#FCA49C",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>UseContextHook by using Props</h5>
        <Loginprops setUsername={setUsername} />{" "}
        <Userprops username={username} />
      </div>
    </Fragment>
  );
};
