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

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book.title);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ author, title, img, id, getBook }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Buy</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
