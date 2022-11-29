import React from 'react'
import "./Header.css"
import {BiSearch} from 'react-icons/bi'


const User = () => {
  return (
    <div className="user_container">
      <img src="/images/user.jpg" alt="user avatar" />
      <span>Alexander</span>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header_container">
      <img className="header_logo" src="/images/Amakilogo.png" alt="pagelogo" />
      <div className="search">
        <input className='search_box' placeholder='Wanna see something cool?'/>
        <BiSearch className='search_icon'/>
      </div>
      <User />
    </div>
  )
}

export default Header