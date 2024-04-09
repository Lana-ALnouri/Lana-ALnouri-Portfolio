import React, { useEffect, useState } from 'react'
import './NavBarStyle.css'

const NavBar = (props) => {
    const [responsiveList, setresponsiveList]= useState (false)
    const handleShowNavBar =()=>{
        setresponsiveList(!responsiveList)
    }

    return (

    <div>
      <div className='NavBar'>
        <div className='NavPartOne'>
            <div className='left'>
              <h1>Lana ALnouri</h1>
            </div>
            <div className='right'>
              <a className='mailaddress' href="mailto:alnourilanamhd@gmail.com">
              <img className='mail' src={props.navmail}  />
              <p>{props.email}</p>
              </a> 
            </div>
        </div>
    <div className='NavPartTwo'>
        <div className='secondNav'>
            <h1 className='logo'>{props.logo}</h1>
            {/* <img className='logo' src={props.logo} alt="" /> */}
            <ul className='NormalList'>
                <a id='Hero' href='#Hero'>Home</a>
                <a href='#Skills' >Skills</a>
                <a href='#Works'>Works</a>
                <a href='#Portfolio'>Portfolio</a>
                <a href='#Footer'>Contact</a>
            </ul>
        </div>
        </div>
        <div className='responsiveNavBar' >
            <button className='menu' onClick={()=>{
            setresponsiveList (!responsiveList)
            }} >
                <img className='menu' src={props.menu} alt="" />
            </button>
        <ul className='responsiveList' style={{display:(responsiveList)? "block" : "none"}}>
            <button className='close' onClick={handleShowNavBar}>
                <img className='closebtn' src={props.closebtn} alt="" />
            </button>
        <li>
                <a href='#Hero'>Home</a>
                <a href='#Skills' >Skills</a>
                <a href='#Works'>Works</a>
                <a href='#Portfolio'>Portfolio</a>
                <a href='#Footer'>Contact</a>
        </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar