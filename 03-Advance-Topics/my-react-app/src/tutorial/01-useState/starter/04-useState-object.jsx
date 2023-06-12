import React from "react";
import { demo } from "../../../data";
const UseStateObject = () => {
  const [Index, setIndex] = React.useState(0);
  const { id, name, age, carrier } = demo[Index];
  const next = () => {
    setIndex((banana) => {
      console.log(banana);
      if (banana == demo.length - 1) {
        banana = 0;
        return banana;
      } else {
        return banana + 1;
      }
    });
  };
  return (
    <>
      <div key={id}>
        <h2>This is Data</h2>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{carrier}</h4>
      </div>
      <button onClick={next}>New Data</button>
    </>
  );
};

export default UseStateObject;
