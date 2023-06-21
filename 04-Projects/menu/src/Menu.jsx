/* eslint-disable react/prop-types */
const Menu = ({ items }) => {
  return (
    <div className="menu_container">
      {items.map((menuitem) => {
        const { id, title, price, img, desc } = menuitem;
        return (
          <article key={id} className="single">
            <img src={img}></img>
            <div className="data">
              <div className="head">
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </div>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
