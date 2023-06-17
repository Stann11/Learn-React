/* eslint-disable react/prop-types */
import React from "react";

const Tour = ({ id, name, data, image, price, removeTour }) => {
  const [readmore, setReadmore] = React.useState(false);
  return (
    <article key={id} className="single_article">
      <img src={image} />
      <footer>
        <div className="name">
          <h4>{name}</h4>
          <span className="price">{price}</span>
        </div>
        <p>
          {readmore ? data : `${data.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)} className="show_btn">
            {readmore ? "Show Less" : "Show More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="not_btn">
          Not Intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
