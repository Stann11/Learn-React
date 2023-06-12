import React from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {user.map((u) => {
          return (
            <li key={u.id}>
              <img src={u.avatar_url}></img>
              <div>
                <h5>{u.login}</h5>
                <a href={u.html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
