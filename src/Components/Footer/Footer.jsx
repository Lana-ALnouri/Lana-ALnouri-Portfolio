import React from 'react'
import './FooterStyle.css'

const Footer = (props) => {
  return (
    <div id='Footer' className='Footer'>
        <div className='Conect'>
            <h2 className='build'>{props.build}</h2>
            <h2 className='contact'>{props.contact}</h2>
            <div className='phone'>
            <img className='icon' src={props.mywhatsapp} alt="" /><span>{props.phonenum}</span>
            </div>
            <br />
            <div className='address'>
            <a className='mailaddress' href="mailto:alnourilanamhd@gmail.com">
            <img className='icon' src={props.myemail} alt="" /><span>{props.mailAddress}</span>
            </a>
            </div>
        </div>
        <img className='footerpic' src={props.footerImg} alt="" />
        </div>
  )
}

export default Footer


