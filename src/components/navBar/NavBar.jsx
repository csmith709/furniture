import React, { useContext, useRef, useState } from "react";
import "../navBar/NavBar.css";
import sofa from "../assets/sofa.png";
import cart_icon from "../assets/cart_icon.png";
import nav_dropdown from "../assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setMenu("shop");
        }}
        className="nav-logo"
      >
        <img src={sofa} alt="" />
        <p>
          Life <br></br>Home <br></br>Furnishings
        </p>
      </Link>
      <img
        onClick={dropdown_toggle}
        className="nav-dropdown"
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Office</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="womens">Bedroom</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Dining</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("seating");
          }}
        >
          <Link to="/seating">Living</Link>
          {menu === "seating" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;