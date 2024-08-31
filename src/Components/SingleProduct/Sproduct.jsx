import React from 'react'
import img1 from '../../assets/products/f1.jpg'
import img2 from '../../assets/products/f2.jpg'
import img3 from '../../assets/products/f3.jpg'
import img4 from '../../assets/products/f4.jpg'

const Sproduct = () => {
  return (
    <>
    <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
            <img src={img3} width="100%" id="MainImg" alt="" />
            <div className="small-img-group">
                <div className="small-img-col" >
                    <img src={img1} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src={img2} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src={img3} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src={img4} width="100%" className="small-img" alt="" />
                </div>
            </div>
        </div>

            <div className="single-pro-details">
                <h6>Home / T-Shirt</h6>
                <h4>Men's Fashion T Shirt</h4>
                <h2>$139.00</h2>
                <select>
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input type="number" value="1" />
                <button className="normal">Add To Cart</button>
                <h4>Product Details</h4>
                <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.8 oz. per
                    sq. yd. fabric constructed from 160% cotton, this classic fit preshrunk
                    jersey knit provides unmatched comfort with each wear. Featuring a taped neck
                    and shoulder, and a seamless double-needle collar, and available in a range
                    of colors, it offers it all in the ultimate head-turning package.
                    </span>
                    </div>
    </section>
    </>
  )
}

export default Sproduct