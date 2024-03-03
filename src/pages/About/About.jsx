import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Project</h2>
            <p className='fs-17'>เว็บแอปนี้สร้างไว้เพื่อเป็น Project ประกอบการเรียนวิชา 240-229 SOFTWARE DEFINED ARCHITECTURE ENGINEER MODULE</p>
            <p className='fs-17'>สมาชิก<br/> 6510110004 กรณ์พงค์ ภัทรพงศ์ธนะชัย<br/> 6510110124 ณภัทร จันทร์เมือง</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About