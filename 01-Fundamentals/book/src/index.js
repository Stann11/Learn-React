import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Props
const books = [
  {
    title: "The Book of Charlie",
    author: "David Von Drehle",
    img: "./images/book1.jpg",
  },
  {
    title: "CROWNED",
    author: " Kahran Bethencourt",
    img: "./images/book2.jpg",
  },
  {
    title: "Happy Place",
    author: "Emily Henry",
    img: "./images/book3.jpg",
  },
];
// const firstbook = {
//   title: "The Book of Charlie",
//   author: "David Von Drehle",
//   img: "./images/book1.jpg",
// };
// const secondbook = {
//   title: "CROWNED",
//   author: " Kahran Bethencourt",
//   img: "./images/book2.jpg",
// };
// const thirdbook = {
//   title: "Happy Place",
//   author: "Emily Henry",
//   img: "./images/book3.jpg",
// };

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book author={author} title={title} img={img} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
