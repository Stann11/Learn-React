const Book = ({ author, title, img, id, getBook, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button className="button1" onClick={() => getBook(id)}>
        Buy
      </button>
      <span className="number">#{number + 1}</span>
    </article>
  );
};
export default Book;
