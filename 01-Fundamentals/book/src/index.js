import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Img />
      <Title />
      <Author />
    </article>
  );
};

//Other way to add inline css in the element
// const Author1 = () => {
//   const inlinecss = {
//     color: "#fff",
//     fontSize: "1rem",
//     marginTop: "1rem",
//   };
//  return <h4 style={{color:'#112233',fontSize:"1rem", marginTop:'1rem'}}></h4>
//   return <h4 style={inlinecss}>Satnamsingh Sandhu</h4>;
// };

const Img = () => <img src="./images/book1.jpg" alt="The Book of Charlie" />;
const Title = () => <h2>The Book of Charlie</h2>;
const Author = () => {
  return <h4>David Von Drehle</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
