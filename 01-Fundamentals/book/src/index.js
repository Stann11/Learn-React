import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";
//Props

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book.title);
  };
  return (
    <>
      <h1 className="Title">Amazone Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
