import React from "react";
const ToggleChallenge = () => {
  const [name, setName] = React.useState(true);
  const toTrue = () => {
    setName(true);
  };
  const toFalse = () => {
    setName(false);
  };
  return (
    <>
      {name ? (
        <div>
          <h2>This is name</h2>
          <button onClick={toFalse}>Toggle</button>
        </div>
      ) : (
        <div>
          <h2>This is toggle</h2>
          <button onClick={toTrue}>Go Back</button>
        </div>
      )}
    </>
  );
};

export default ToggleChallenge;
