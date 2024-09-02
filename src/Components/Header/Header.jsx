import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <section id="header">
        <a href="#">
            <Link className="active nav-link" to={"/"}>
          <img src={logo} alt="Logo" />
            </Link>
        </a>

        <div>
          <ul id="navbar">
            <li>
              {/* <a className="active" href="index.html">Home</a> */}
              <Link className="active nav-link" to={"/"}>
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/shop/"}>
                Shop
              </Link>
              {/* <a href="shop.html">Shop</a> */}
            </li>
            <li>
              <Link className="nav-link" to={"/Blog/"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/about/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/contact/"}>
                Contact
              </Link>
            </li>
            <li className="lg-bag">
              <Link className="nav-link" to={"/cart/"}>
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>

        <div id="mobile">
          <a href="cart.html">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    </>
  );
};

export default Header;
