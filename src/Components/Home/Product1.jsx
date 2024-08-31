import React from "react";
import product1 from "./Item1";

import p1img from "../../assets/products/f1.jpg";
import p2img from "../../assets/products/f2.jpg";
import p3img from "../../assets/products/f3.jpg";
import p4img from "../../assets/products/f4.jpg";
import p5img from "../../assets/products/f5.jpg";
import p6img from "../../assets/products/f6.jpg";
import p7img from "../../assets/products/f7.jpg";
import p8img from "../../assets/products/f8.jpg";
import { Link } from "react-router-dom";

const Product1 = () => {
  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          {/* <Link className="pro"  to={"Sproduct.html"} */}
          
          {/* <div className="pro" onClick="window.location.href='sproduct.html';">
                <img src={p1img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div> */}

          {product1.map((item) => (
            // <div className="pro">
            <Link className="pro" to={"/S_product/"}>
              <img src={item.image} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>{item.price}</h4>
              </div>
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </Link>
            // </div>
          ))}

          {/*             
            <div className="pro">
                <img src={p3img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
                <img src={p4img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
                <img src={p5img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
                <img src={p6img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
                <img src={p7img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
                <img src={p8img} alt="" />
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div> */}
        </div>
      </section>
    </>
  );
};

export default Product1;
