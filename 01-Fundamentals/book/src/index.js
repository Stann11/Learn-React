import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Props
const books = [
  {
    title: "The Book of Charlie",
    author: "David Von Drehle",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    title: "CROWNED",
    author: " Kahran Bethencourt",
    img: "./images/book2.jpg",
    id: 2,
  },
  {
    title: "Happy Place",
    author: "Emily Henry",
    img: "./images/book3.jpg",
    id: 3,
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
        return <Book {...book} key={book.id} />;
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
