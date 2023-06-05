import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Props
const firstbook = {
  title: "The Book of Charlie",
  author: "David Von Drehle",
  img: "./images/book1.jpg",
};
const secondbook = {
  title: "CROWNED",
  author: " Kahran Bethencourt",
  img: "./images/book2.jpg",
};
const thirdbook = {
  title: "Happy Place",
  author: "Emily Henry",
  img: "./images/book3.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstbook.author}
        title={firstbook.title}
        img={firstbook.img}
      />
      <Book
        author={secondbook.author}
        title={secondbook.title}
        img={secondbook.img}
      />
      <Book
        author={thirdbook.author}
        title={thirdbook.title}
        img={thirdbook.img}
      />
      {/* <Author1 /> */}
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
