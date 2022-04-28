import React from 'react'
import { Feature } from '../../components'
import './whatAce.css'
const whatAce = () => {
  return (
    <div className='whatAce section__margin'>
        <div className='whatAce-feature'>
          <Feature title='What is Ace' text='Our platform provide ultimate tools and history data to increase your chance to win you pair. Our community also have more than 12,000 members in our offical discord.'/>
        </div>
        <div className='whatAce-heading'>
          <h1 className='gradient__text'>Best chance to win your pairs</h1>
          <p>Our platform provide ultimate solution to get early access.</p>
        </div> 
        <div className='ace-feature_container'>
          <Feature title='ChatBot' text ='Use our chatbot to get the lastest information of the trending sneakers'/>
          <Feature title='Automatic check' text='Set your target price to grab your pairs when they are available'/>
          <Feature title='Premium Service' text='Subscribe our premimum plan to get private help.'/>
        </div> 
    </div>
  )
}

export default whatAce