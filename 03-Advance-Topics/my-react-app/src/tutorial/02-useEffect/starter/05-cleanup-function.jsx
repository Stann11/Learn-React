import React from "react";
const CleanupFunction = () => {
  const [user, setUser] = React.useState(false);
  return (
    <>
      <button onClick={() => setUser(!user)}>Toggle</button>
      {user && <Toggle />}
    </>
  );
};
const Toggle = () => {
  React.useEffect(() => {
    console.log("ok");
    const id = setInterval(() => {
      console.log("------->");
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h2>Hello</h2>;
};
export default CleanupFunction;
