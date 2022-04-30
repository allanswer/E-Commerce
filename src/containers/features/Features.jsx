import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
const featuresData = [
  {
    title : 'Grab every shoes you want',
    text : "Use the highly technology bot to secure shoes from every brand, subscribe and unlock premium feature for ultimate performance for your bot"
  },
  {
    title : 'Secure',
    text : 'Preserving the integrity of our marketplace means staying a step ahead. Our security and fraud systems, powered by our world class partners, have your personal information covered 24/7.'
  },
  {
    title : 'Global Access',
    text : 'Whether it’s pre-release, regionally limited, or “sold out” – our millions of customers from over 200+ countries allow you to easily secure those hard-to-find, coveted items.'
  },
  {
    title : 'Transparent Pricing',
    text : 'Our real-time marketplace works just like the stock market –  allowing you to buy and sell the most coveted items at their true market price.'
  }
]
export const Features = () => {
  return (
    <div className='features section__padding' id='features'>
      <div className='features-heading'>
        <h1 className='gradient__text'>The sneakers are all yours, you only have to trust our platform and follow our plans step by step.</h1>
        <p>Request early access to get started</p>
      </div>
      <div className='features-container'> 
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features;
