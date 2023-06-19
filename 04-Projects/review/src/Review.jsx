/* eslint-disable no-unused-vars */
import React from "react";
import { reviews } from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  const { id, name, designation, review, images } = reviews[index];
  const checknumber = (number) => {
    console.log(number);
    if (number < 0) {
      console.log("<---------");
      return reviews.length - 1;
    }
    if (number > reviews.length - 1) {
      console.log("<---------");
      return 0;
    }
    return number;
  };
  const next = () => {
    setIndex((index) => {
      const number = index + 1;
      return checknumber(number);
    });
  };
  const previous = () => {
    setIndex((index) => {
      const number = index - 1;
      return checknumber(number);
    });
  };
  const surprice = () => {
    setIndex((index) => {
      const newValue = Math.floor(Math.random() * reviews.length);
      return checknumber(newValue);
    });
  };
  return (
    <>
      <article key={id} className="card">
        <img src={images} alt="Image" />
        <div className="taglines">
          <h3>{name}</h3>
          <h4>{designation}</h4>
          <h5>{review}</h5>
        </div>
        <div className="btn">
          <button onClick={previous}>
            <FaChevronLeft />
          </button>
          <button onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <div className="surprice">
          <button onClick={surprice}>Surprice me</button>
        </div>
      </article>
    </>
  );
};

export default Review;
