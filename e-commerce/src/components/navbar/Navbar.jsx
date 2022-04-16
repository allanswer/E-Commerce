import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine  } from "react-icons/ri";

const Menu = () => (
  <>
    <p><a href="#Men">Men's</a></p>
    <p><a href="#Women">Women's</a></p>
    <p><a href="#Accessories">Accessories</a></p>
    <p><a href="#About">About us</a></p>
  </>
)
const Navbar = () => {
  //Initial state of menu is closed (false)
  const[toggleMenu, SetToggleMenu] = useState(false); 
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links__logo'>
        <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links__container'>
          <Menu />
        </div>  
      </div>

      <div className='navbar-sign'>
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' onClick={ ()=> SetToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={ ()=> SetToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='navbar-menu__container scale-up-center'>
              <Menu />
              <div className='navbar-menu__container-sign '>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
             </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar