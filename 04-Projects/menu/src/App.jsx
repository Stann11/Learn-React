/* eslint-disable no-unused-vars */
import React from "react";
import { menu } from "./data";
import Buttons from "./Buttons";
import Menu from "./Menu";
const categorys = ["all", ...new Set(menu.map((menus) => menus.category))];
function App() {
  const [items, setItems] = React.useState(menu);

  const tmkc = (category) => {
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <>
      <section className="container">
        <div className="heading">
          <h1>Our Menu</h1>
          <hr></hr>
        </div>
        <Buttons categorys={categorys} tmkc={tmkc} />
        <Menu items={items} />
      </section>
    </>
  );
}

export default App;
