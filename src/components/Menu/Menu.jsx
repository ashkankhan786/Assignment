import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import menu_heading_list, {
  bakery,
  fruitsandvegetables,
  meat,
  snacks,
} from "../../assets/menu";
function Menu() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState("MEAT AND SEAFOOD");
  useEffect(() => {
    switch (selected) {
      case "MEAT AND SEAFOOD":
        setItems(meat);
        break;
      case "BAKERY":
        setItems(bakery);
        break;
      case "FRUITS AND VEGETABLES":
        setItems(fruitsandvegetables);
        break;
      case "BEVERAGE,BISCUIT AND SNAKCS":
        setItems(snacks);
        break;
    }
  }, [selected]);
  return (
    <div className="menu">
      <div className="menu-content">
        <div className="menu-heading">
          <h3>Shop by Category</h3>
          <h1>Top Category of Organic Food</h1>
        </div>
        <div className="menu-name">
          {menu_heading_list.map((item, index) => (
            <div
              key={index}
              className={`${
                selected === item ? "div-selected" : "div-not-selected"
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="menu-items-display">
          {items.map((item) => {
            if (item.strMealThumb)
              return (
                <MenuItem
                  key={item.idMeal}
                  title={item.strMeal}
                  img={item.strMealThumb}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}
export default Menu;
