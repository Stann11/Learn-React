/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Questions = ({ title, info }) => {
  const [show, setShow] = React.useState(false);
  return (
    <article className="single_question">
      <div className="heading">
        <h3>{title}</h3>
        <button onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {show ? (
        <div className="info">
          <p>{show && info ? info : ""}</p>
        </div>
      ) : null}
    </article>
  );
};

export default Questions;
