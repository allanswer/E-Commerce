import React from 'react'
import './brand.css'
import { nike, adidas, newbalance, ua, jordan, shopify, google } from './import'
const Brand = () => {
  return (
    <div className='brand section__padding'>
        <div><img src={nike} alt="nike" /></div>
        <div><img src={jordan} alt="jordan" /></div>
        <div><img src={adidas} alt="adidas" /></div>
        <div><img src={newbalance} alt="newbalance" /></div>
        <div><img src={ua} alt="ua" /></div>
    </div>
  )
}

export default Brand