import React from 'react';
import B1img from '../../assets/blog/b1.jpg'
import B2img from '../../assets/blog/b2.jpg'
import B3img from '../../assets/blog/b3.jpg'
import B4img from '../../assets/blog/b4.jpg'
import B5img from '../../assets/blog/b5.jpg'

const Blog = () => {
  return (
    <>
    <section id="blog">
        <div className="blog-box">
            <div className="blog-img">
                <img src={B1img} alt="B-1" />
            </div>
            <div className="blog-details">
                <h4>Elegant Evening Gown</h4>
                <p>This exquisite evening gown exudes elegance and sophistication, making it the perfect choice for
                    formal events and special occasions. Crafted from luxurious satin fabric, its flowing silhouette
                    gracefully drapes along the body, while the intricate beadwork and sequin embellishments add a touch
                    of glamour. The gown features a flattering sweetheart neckline and a sweeping train that creates a
                    dramatic and memorable entrance.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={B2img} alt="B-2" />
            </div>
            <div className="blog-details">
                <h4>Cozy Cashmere Sweater</h4>
                <p>Embrace warmth and style with this luxurious cashmere sweater. Made from the finest cashmere fibers,
                    it offers unparalleled softness and comfort against the skin. The classic crew neck design and
                    ribbed cuffs provide a timeless appeal, making it a versatile piece for both casual outings and
                    refined gatherings. Stay cozy and chic during the colder months with this wardrobe essential.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>12/21</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={B3img} alt="B-3" />
            </div>
            <div className="blog-details">
                <h4>Versatile Tailored Blazer</h4>
                <p>Elevate your professional attire with this versatile tailored blazer. Cut to perfection, this blazer
                    features a sleek lapel collar, structured shoulders, and a single-button closure that accentuates
                    your silhouette with a modern flair. Constructed from high-quality wool blend fabric, it offers both
                    style and functionality, effortlessly transitioning from the office to after-work gatherings and
                    formal events.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>10/06</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={B4img} alt="B-4" />
            </div>
            <div className="blog-details">
                <h4>Relaxed Boho Maxi Dress</h4>
                <p>Embrace carefree bohemian vibes with this relaxed maxi dress. Made from lightweight and breathable
                    fabric, this dress exudes comfort and femininity. The loose, flowing silhouette is complemented by a
                    boho-inspired print and delicate embroidery, perfect for sunny days and beach getaways. Pair it with
                    sandals and statement jewelry for a laid-back yet chic look.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>11/05</h1>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={B5img} alt="B-5" />
            </div>
            <div className="blog-details">
                <h4>Athleisure Hooded Jacket</h4>
                <p>Embrace the fusion of fashion and function with this trendy athleisure hooded jacket. Crafted from a
                    high-performance blend of materials, it provides optimal comfort and flexibility during workouts or
                    outdoor activities. The jacket's modern design includes a practical hood, zippered pockets, and
                    stylish paneling, making it suitable for both exercise routines and casual streetwear looks. Stay
                    active and on-trend with this must-have addition to your activewear wardrobe.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>12/23</h1>
        </div>
    </section>
    </>
  )
}

export default Blog