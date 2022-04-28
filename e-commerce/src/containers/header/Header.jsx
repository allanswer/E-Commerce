import React from 'react';
import './header.css';
import People from '../../assets/people.png';
import Sneaker from '../../assets/sneaker1.png';
const Header = () => {
  return (
    <div className='header section__padding' id='home'>
        <div className='header-content'>
            <h1 className='gradient__text'>Best place to secure your sneakers ! </h1>
            <p>MAYBE IT’S SOMEWHERE YOU NEED TO GO. A DIFFERENT WAY OF LIFE YOU YEARN TO LIVE. OR SIMPLY THE NEED TO FIGHT FOR WHAT’S RIGHT. THESE INDIVIDUALS DEFIED CONVENTION TO FIND THEIR OWN INDEPENDENT PATHS. WHERE WILL YOURS TAKE YOU?</p>
        
            <div className='header-content__input'>
                <input type="main"  placeholder='Your email address'/>
                <button type='button'>Get Started</button>
            </div>

            <div className='header-content__people'>
                <img src={People} alt="people" />
                <p>23000 people requested an access</p>
            </div>
        </div>    
        <div className='header-image'>
            <img src={Sneaker} alt="Sneaker" />
        </div>
    </div>
  )
}

export default Header