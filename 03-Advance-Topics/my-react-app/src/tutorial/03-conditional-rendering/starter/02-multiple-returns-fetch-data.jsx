import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const getuser = async () => {
      try {
        let responce = await fetch(url);
        let temp = await responce.json();
        setUser(temp);
      } catch (error) {
        setErr(true);
      }
      setIsloading(false);
    };
    getuser();
  }, []);
  if (isloading) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Error 404: Data not found</h1>;
  }
  const { login, avatar_url, blog, bio } = user;
  return (
    <section>
      <div>
        <h2>{login}</h2>
        <img src={avatar_url}></img>
        <div>
          <h4>Works at {blog}</h4>
          <h5>{bio}</h5>
        </div>
      </div>
    </section>
  );
};
export default MultipleReturnsFetchData;
