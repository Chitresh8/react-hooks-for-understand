import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export const UseEffectHookWithUseState = () => {
  const [apiCallData, setApiCallData] = useState([]);
  const [numeralCount, setNumeralCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setApiCallData(response.data.slice(0, 50));
        // console.log("API WAS CALLED");
      })
      .catch((error) => {
        console.error("Error Fetching data", error);
        console.log(setApiCallData, "error");
      });
  }, []);
  //   console.log(apiCallData, "apiCall");

  const plusClickHandler = () => {
    setNumeralCount(numeralCount + 1);
  };

  const resetClickHandler = () => {
    setNumeralCount(0);
  };
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "skyblue",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>useEffect Hook With Use State</h5>
        <h1>{numeralCount}</h1>
        <button onClick={plusClickHandler}>Increment</button>
        <button onClick={resetClickHandler}>Reset</button>

        <div>
          <table>
            <thead>
              <tr>
                <th>POST ID</th>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>BODY</th>
              </tr>
            </thead>

            {apiCallData.map((el) => {
              return (
                <tbody key={el.id}>
                  <tr>
                    <td>{el.postId}</td>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.body}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </Fragment>
  );
};
