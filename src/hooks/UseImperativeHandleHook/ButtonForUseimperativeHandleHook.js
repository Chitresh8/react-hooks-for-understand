import React, {
  Fragment,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export const ButtonForUseImperativeHandleHook = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  //   const buttonClickHandler = () => {

  //   };
  return (
    <Fragment>
      <button /*onClick={buttonClickHandler}*/>Button for Child</button>
      {/* If toggle is true then show the child component */}
      {!toggle && <span>Toggle</span>}
    </Fragment>
  );
});
