import React from 'react'
import feature from './FeatureItem'

const Feature = () => {
  return (
    <>
    <section id="feature" className="section-p1">

        {feature.map((item)=>(<div className="fe-box">
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>
        </div>))}
       
    </section>
    </>
  )
}

export default Feature