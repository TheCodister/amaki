import React, { useState } from 'react'
import "./Header.css"
import {BiSearch} from 'react-icons/bi'
import Popupprofile from '../Profile/Profile'


const User = () => {
  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="user_container">
      <img className="profile_button" onClick={() => setButtonPopup(true)} src="/images/user.jpg" alt="user avatar" />
      <Popupprofile trigger={buttonPopup} setTrigger={setButtonPopup}>
      </Popupprofile>
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