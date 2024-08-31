import React from 'react'

const Newslatter = () => {
  return (
    <>
    <section id="newsletter" className="section-m1 section-p1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span>
            </p>

        </div>
        <div className="form">
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
        </div>
    </section>
    </>
  )
}

export default Newslatter