import React from 'react'
import p1img from '../../assets/products/n1.jpg';
import p2img from '../../assets/products/n2.jpg';
import p3img from '../../assets/products/n3.jpg';
import p4img from '../../assets/products/n4.jpg';
import p5img from '../../assets/products/n5.jpg';
import p6img from '../../assets/products/n6.jpg';
import p7img from '../../assets/products/n7.jpg';
import p8img from '../../assets/products/n8.jpg';
import product2 from './Item2';

const Product1 = () => {
  return (
    <>
    <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">

            {/* <div className="pro" onclick="window.location.href='sproduct.html';">
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

            {product2.map((item) => (
                <div className="pro">
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
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>))}

            
            {/* <div className="pro">
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
  )
}

export default Product1