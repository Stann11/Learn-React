import React from "react";
const UserChallenge = () => {
  const [user, setUser] = React.useState(null);
  const [logedin, setLogedin] = React.useState(true);
  const login = () => {
    setLogedin(false);
    let user1 = { id: 1, name: "Satnam" };
    setUser(user1);
    console.log(user);
  };
  const logout = () => {
    setLogedin(true);
    setUser(null);
  };
  return (
    <>
      {logedin ? (
        <div>
          <h2>You must login!</h2>
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div>
          <h2>You have successfully loged in!</h2>
          <h4>Your name is {user.name}</h4>
          <button onClick={logout}>Login</button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
