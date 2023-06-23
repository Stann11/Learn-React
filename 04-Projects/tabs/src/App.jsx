import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = React.useState(true);
  const [job, setJob] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const fetching = async () => {
    const awaiting = await fetch(url);
    const responce = await awaiting.json();
    setJob(responce);
    setLoading(false);
  };
  React.useEffect(() => {
    fetching();
  }, []);
  if (loading) {
    return (
      <section>
        <div>
          <h1>Loading....</h1>
        </div>
      </section>
    );
  }
  const { company, dates, duties, title } = job[value];
  return (
    <>
      <section className="container">
        <div className="heading">
          <h1>Experiences</h1>
          <hr></hr>
        </div>
        <div className="all">
          <div className="btn_container">
            {job.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job_btn ${index === value && "active_btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="single_article">
            <h3>{title}</h3>
            <span>{company}</span>
            <p>{dates}</p>
            {duties.map((item, index) => {
              return (
                <div key={index} className="duty">
                  <FaAngleDoubleRight className="icons"></FaAngleDoubleRight>
                  <p>{item}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
