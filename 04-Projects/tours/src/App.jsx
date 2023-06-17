import { tours } from "./data";
import React from "react";
import Tours from "./Tours";
import "./index.css";
function App() {
  const [abc, setABC] = React.useState(tours);
  const removeTour = (id) => {
    const newList = abc.filter((xyz) => xyz.id !== id);
    setABC(newList);
  };
  return (
    <main>
      <Tours abc={abc} removeTour={removeTour} />
    </main>
  );
}

export default App;
