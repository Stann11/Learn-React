import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting(){
//     return <h2>My First component</h2>;
// }
function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}
const Person = () => <h2>Satnamsingh Sandhu</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
