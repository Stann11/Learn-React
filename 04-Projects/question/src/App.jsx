/* eslint-disable no-unused-vars */
import React from "react";
import Questions from "./Questions";
import { questions } from "./data";
function App() {
  const [data, setData] = React.useState(questions);
  return (
    <>
      <section>
        <div className="main">
          <h1>Questions</h1>
          <div>
            {data.map((a) => {
              return <Questions key={a.id} {...a} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
