import React, { Fragment, useEffect, useState, useMemo } from "react";
import axios from "axios";

export const UseMemoHook = () => {
  const [memory, setMemory] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setMemory(response.data);
        // console.log(response, "DATA");
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i > comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("ThIs WaS rEnDeReD"); ////Without useMemo while clicking the Topggle Button, it is rendered so many times.
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(memory), [memory]);

  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#CCE4FC",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>Use Memo and it's Function</h5>
        <h1>{getLongestName}</h1>
        <h5>
          With UseMemo, in console it will not render after refresh and click
          the toggle button
        </h5>
        {/* <strong>{findLongestName(memory)}</strong> ///Without useMemo
        while clicking the Topggle Button, it is rendered so many times. */}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle Button
        </button>
        {toggle && <h1>ToggleShow</h1>}
        {!toggle && <h1>ToggleNotShow</h1>}
        <p>
          The Purpose of UseMemo is to memoise the value and it returns the
          value only.The difference between useMemo and useCallback is ,{" "}
          <strong>
            useMemo will memoise the value and it returns the value in a
            function.useCallback will memoise the value of the function and it
            will returns the value of the function.
          </strong>
        </p>
      </div>
    </Fragment>
  );
};
