import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const clickok = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={clickok}>
        Click me
      </button>
    </>
  );
};

export default UseStateBasics;
