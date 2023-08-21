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
          backgroundColor: "#F09E6D",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>useEffect Hook With Use State</h5>
        <h1>{numeralCount}</h1>
        <button onClick={plusClickHandler}>Increment</button>
        <button onClick={resetClickHandler}>Reset</button>

        <div>
          <table
            style={{
              border: "1px solid black",
              marginTop: "5px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <th
                  style={{
                    border: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  POST ID
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  NAME
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  EMAIL
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                >
                  BODY
                </th>
              </tr>
            </thead>

            {apiCallData.map((el) => {
              return (
                <tbody key={el.id}>
                  <tr
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                  >
                    <td
                      style={{
                        border: "1px solid black",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      {el.postId}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      {el.id}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      {el.name}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      {el.email}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                      }}
                    >
                      {el.body}
                    </td>
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
