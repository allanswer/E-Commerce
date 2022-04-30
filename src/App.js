import React from 'react';
import { Navbar, CTA, Brand} from './components';
import { Header, WhatAce, Features} from './containers';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand />
      <WhatAce />
      <Features/>
      <CTA />
    </div>
  )
}

export default App