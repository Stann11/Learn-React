import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Satnam");
  return (
    <>
      <h2>Falsy OR:{text || "Hello World!"}</h2>
      <h2>Falsy AND:{text && "Hello World!"}</h2>
      <h2>Truly OR:{name || "Hello World!"}</h2>
      <h2>Truly AND:{name && "Hello World!"}</h2>
    </>
  );
};
export default ShortCircuitOverview;
