import React, { Fragment, useState, useRef } from "react";

export const AnotherExofUseRefHook = () => {
  const [name, setName] = useState("Chitresh");

  const refElement = useRef("");
  console.log(refElement, "refElement");

  function reset() {
    setName("");
    refElement.current.focus();
  }

  function handleInput() {
    refElement.current.style.color = "goldenrod";
    refElement.current.value = "React";
  }
  return (
    <Fragment>
      <div>
        <h1>Code Learning & Practice of useRef()</h1>
        <div>
          <input
            type="text"
            ref={refElement}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button onClick={reset}>Reset</button>
          <button onClick={handleInput}>Handle Input</button>
        </div>
        <ol
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <li>
            First import the 'useRef()' in the top of the code i.e., "import
            {"{useRef}"} from 'react'"
          </li>
          <li>After that write the refElement in the code</li>
          <li>
            Then write the useState for the input section,value and onChange
            function
          </li>
          <li>
            After that, we will keep a button with Reset when the input is
            filled, the button will clear the input field.
          </li>
          <li>
            While created the input and reset button, when the input field is
            cleared, the input focus is disappeared.At the same time when we
            need to enter the text in an input, while clicking on an input
            field, it's getting focus.
          </li>
          <li>
            So, we need the input foucs when we reset the input field, the input
            has to be focus.
          </li>
          <li>
            We need to add the attribute as 'ref' to the input tag Ex:-
            refElement with curly braces
          </li>
          <li>
            After that,put the 'refElement.current.focus()' to the reset
            function which we assigned to the button component.
          </li>
          <li>
            While clicking the Reset button, the input is clear and the input is
            getting focus automatically without clicking on input by moving
            cursor on the input.
          </li>
          <li>
            To change the input text color to another colour, we kept a button
            i.e., Handle Input and wrote a function that the input text will
            turns the color from black to goldenrod while clicking the Handle
            Input Button.
          </li>
          <li>
            If we change the text value from Chitresh to React with goldenrod
            colour, then we have to write refElement.current.value='React' in
            the handleInput function for the Handle Input button.
          </li>
        </ol>
      </div>
    </Fragment>
  );
};
