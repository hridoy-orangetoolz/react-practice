/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from "react";

function App() {
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onCLickHandler = () => {
    focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    focusPoint.current.focus();
  };
  return (
    <>
      <div>
        <button onClick={onCLickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </>
  );
}

export default App;
