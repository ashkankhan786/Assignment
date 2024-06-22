import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { LiaGoogle } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="first">
        <p className="logo">
          <span className="go">GO</span>
          <span className="food"> FOOD</span>
        </p>
      </div>
      <div className="second">
        <ul>
          <li>
            <button>Home</button>{" "}
            <RiArrowDropDownLine size={20} style={{ color: "green" }} />
          </li>
          <li>
            <button>Groceries </button>
            <RiArrowDropDownLine
              size={20}
              style={{ color: "green", marginLeft: "20px" }}
            />
          </li>
          <li>
            <button>Pages </button>
            <RiArrowDropDownLine size={20} style={{ color: "green" }} />
          </li>
        </ul>
      </div>
      <div className="third">
        <p className="connect">Connect with us</p>
        <FaArrowRightLong
          fill="white"
          style={{ marginTop: "45px", cursor: "pointer" }}
        />
      </div>
      <div className="fourth">
        <div className="icon">
          <RiSearchLine fill="white" />
        </div>
        <div className="icon">
          <LiaGoogle fill="white" />
        </div>
        <div className="icon">
          <FaRegHeart className="icon-content" fill="white" />
          <div className="liked">{0}</div>
        </div>
        <div className="icon">
          <AiOutlineShopping className="icon-content" fill="white" />
          <div className="cart">{0}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
