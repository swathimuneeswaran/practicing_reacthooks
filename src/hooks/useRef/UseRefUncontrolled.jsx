import React, { useRef } from "react";

const UseRefUncontrolled = () => {
  const inputRef = useRef("");
  const inputFocus = useRef(null);
  const handleSubmit = () => {
    alert(inputRef.current.value);
    inputRef.current.value=""
    inputFocus.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      <input type="text" ref={inputFocus} />
      <style jsx>
        {`
          button {
            background-color: red;
          }
        `}
      </style>
    </>
  );
};

export default UseRefUncontrolled;
