import React from 'react'
import p1img from '../../assets/products/f1.jpg';
import p2img from '../../assets/products/f2.jpg';
import p3img from '../../assets/products/f3.jpg';

const Cart_main = () => {
  return (
    <>
    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>REMOVE</td>
                    <td>IMAGES</td>
                    <td>PRODUCTS</td>
                    <td>PRICE</td>
                    <td>QUANTITY</td>
                    <td>SUBTOTAL</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
                    </td>
                    <td><img src={p1img} alt="P-1" /></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td>
                        <a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
                    </td>
                    <td><img src={p2img} alt="P-1" /></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td>
                        <a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
                    </td>
                    <td><img src={p3img} alt="P-1" /></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section id="cart-add" className="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon Code" />
                <button className="normal">Apply</button>
            </div>
        </div>
        <div id="sub-total">
            <h3>Cart Totals</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$ 335</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$ 335</strong></td>
                </tr>
            </table>
            <button className="normal">Proceed to checkout</button>
        </div>
    </section>
    </>
  )
}

export default Cart_main