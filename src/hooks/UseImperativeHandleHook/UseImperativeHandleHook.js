import React, { Fragment, useRef } from "react";
import { ButtonForUseImperativeHandleHook } from "./ButtonForUseimperativeHandleHook";

export const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);
  return (
    <Fragment>
      <div
        style={{
          border: "none",
          backgroundColor: "#F4ACB4",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h5>Use Imperative Handle Hook and it's Function</h5>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button from Parent
        </button>
        <ButtonForUseImperativeHandleHook ref={buttonRef} />
        <ol>
          <li>
            Initially, we wrote a code that when the child button clicks,it will
            show Toggle text down in the child button...!
          </li>
          <li>
            By using useImperativeHandle Hook, we will transfer the function to
            the parent button which we wriiten for child button..!!?
          </li>
          <li>
            After setting the use Imperative Handle and forwardRef,we're
            altering the function from child to parent component.
          </li>
          <li>
            In use Imperative Handle hook, we have to write a function Ex:-
            alterToggle and pass argument as ref for the forwardRef in the
            parent component.
          </li>
          <li>
            While looking into this code, we have to understand thoroughly and
            need to do more examples by using useImperativeHandle hook.
          </li>
          <li>
            After the completion of code, before we press the button of child,
            it will show Toggle text in UI.
          </li>
          <li>
            After using useImperativeHandle, it's showing that while clicking
            thr parent button, showing thhe Toggle text.The child button is in
            Dummy mode.
          </li>
        </ol>
      </div>
    </Fragment>
  );
};
