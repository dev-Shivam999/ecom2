import React from 'react'
import A6img from '../../assets/about/a6.jpg';
import video from '../../assets/about/1.mp4';

function About_Head() {
  return (
    <>
    <section id="about-head" className="section-p1">
        <img src={A6img} alt="A-1" />
        <div>
            <h2>Who We Are</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque temporibus deleniti magnam alias error aspernatur rerum optio quaerat dolores vel ea tenetur veniam exercitationem voluptates autem numquam pariatur quas, amet aperiam. Reiciendis iure doloribus facilis corrupti placeat consequuntur nobis modi, quia, necessitatibus qui error!</p>
            <abbr title="">
                Create stunning images with as much pr as little control as you like thanks to a choice of Basic and Creative Modes.
            </abbr>
            <br /><br />
            <marquee bgcolor="#ccc" loop="-1" scrollamout="5" width="100%">
                Create stunning images with as much pr as little control as you like thanks to a choice of Basic and Creative Modes.
            </marquee>
        </div>
    </section>
    
    <section id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
            <video src={video} autoPlay muted loop></video>
        </div>
    </section>
    </>
  )
}

export default About_Head
