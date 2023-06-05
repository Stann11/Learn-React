import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Props
const title = "The Book of Charlie";
const author = "David Von Drehle";
const img = "./images/book1.jpg";
const alt = "The Book of Charlie";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      {/* <Author1 /> */}
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
