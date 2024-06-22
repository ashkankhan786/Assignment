import "./Header.css";
import React from "react";
import FruitSmall from "../../assets/Fruit-Small.png";
import HeaderImage from "../../assets/HeaderImage.png";

import { FaArrowRightLong } from "react-icons/fa6";
function Header() {
  return (
    <div className="header">
      <div className="header-white">
        <p className="disc">Discount upto 20%</p>
        <p className="buy">Buy Fresh And Organic</p>
        <div className="groc">
          Grocery Food
          <img src={FruitSmall} className="header-img"></img>
        </div>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit
          amet justo donec. Enim praesent elementum facilisis leo vel.
        </p>
        <div className="shop">
          <div className="submit-but">
            <button>
              Shop Now{" "}
              <FaArrowRightLong
                fill="white"
                style={{ cursor: "pointer", width: "30px", fill: "white" }}
              />
            </button>
          </div>
          <div>
            <p
              style={{
                fontSize: "34px",
                fontWeight: "450",
                letterSpacing: "-3px",
              }}
            >
              35 k +
            </p>
            <p style={{ color: "gray" }}>Users</p>
          </div>
          <div>
            <p
              style={{
                fontSize: "34px",
                fontWeight: "450",
                letterSpacing: "-3px",
              }}
            >
              18 k +
            </p>
            <p style={{ color: "gray" }}>Products</p>
          </div>
        </div>
      </div>
      <div className="header-green">
        <div className="mid-img">
          <img src={HeaderImage}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
