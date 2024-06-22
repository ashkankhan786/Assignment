import React from "react";
import "./MenuItem.css";
import { FaArrowRightLong } from "react-icons/fa6";

function MenuItem({ title, img }) {
  return (
    <div className="menu-item-content">
      <div className="item-image">
        <img src={img} />
      </div>
      <div className="item-content">
        <div className="item-name-price">
          <div className="item-name">{title}</div>
          <div className="item-price">$8.45</div>
        </div>
        <div className="item-desc-buy">
          <div className="item-desc">
            Lorem ipsum dolor sit amet quam in lacus risus
          </div>
          <div className="item-buy">
            SHOP NOW <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
