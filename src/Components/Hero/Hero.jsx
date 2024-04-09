import React, { useState } from 'react'
import "./HeroStyle.css"


const Hero = (props) => {
  return (
    <div id='Hero' className='Hero'  >
        <div className='HeroChild'>
          <div className='aboutMe'>
            <p className='hello'>{props.hello}</p>
            <h2 className='myname'>{props.myName}</h2>
            <p className='dev'>{props.dev}</p>
            <p className='defn'>{props.defn}</p> 
          <div className='contactMe'>
            <ul className='socialPart'>
                <a href="https://t.me/LANANOURI"><img className='telegram' src={props.telegram} alt="" /></a>
                <a href="mailto:alnourilanamhd@gmail.com"><img className='email' src={props.email} alt="" /></a>
                <a href="https://github.com/Lana-ALnouri"><img className='github' src={props.github} alt="" /></a>
            </ul>
              <a href="/LanaALnouriPortfolio/src/assets/Img/Lana ALnouri.pdf"  target='blank' download="" >
                <button className='cv'>{props.cv}            </button>
              </a>
        </div>
        </div>
        <div>
              <img className='background' src={props.heroBg} alt="" />
          </div>
          </div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

    </div>
  )
}
export default Hero

