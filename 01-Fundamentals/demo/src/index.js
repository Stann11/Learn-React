import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting(){
//     return <h2>My First component</h2>;
// }
function Greeting() {
  return (
    <>
      <div>
        <h3>Hello World!</h3>
        <ul>
          <li>
            <a href="#">Hello People</a>
          </li>
        </ul>
      </div>
      <h2>Hello World!</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
