import React from 'react'
import Hero from '../Home/Hero'
import Banner from '../Home/Banner'
import Product1 from '../Home/Product1.jsx'
import Product2 from '../Home/Product2.jsx'
import Home_banner from '../Home/Home_banner'
import Newslatter from '../Home/Newslatter'
import Feature from '../Home/Feature.jsx'

const Home = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Product1 />
    <Banner />
    <Product2 />
    <Home_banner />
    <Newslatter />
    </>
  )
}

export default Home