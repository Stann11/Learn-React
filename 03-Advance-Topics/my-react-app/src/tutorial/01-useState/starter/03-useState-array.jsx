import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [People, setPeople] = React.useState(data);
  const remove = (id) => {
    let newPeople = People.filter((People) => People.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <div>
        {People.map((a) => {
          const { id, name } = a;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <button onClick={() => remove(id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPeople([])}>Remove All</button>
    </>
  );
};

export default UseStateArray;
