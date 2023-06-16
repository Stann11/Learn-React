/* eslint-disable react/jsx-key */
import React from "react";
import { persons } from "./data";

function App() {
  const [user, setUser] = React.useState(persons);
  return (
    <>
      <div className="main">
        <h1>{user.length} Birthday today</h1>
        <ul>
          {user.map((a) => {
            const { id, name, age, image } = a;
            return (
              <li key={id}>
                <img src={image} />
                <div className="subheading">
                  <h3>{name}</h3>
                  <h5>{age}</h5>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="btn">
          <button onClick={() => setUser([])}>Click me</button>
        </div>
      </div>
    </>
  );
}

export default App;
