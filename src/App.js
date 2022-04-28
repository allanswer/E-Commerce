import React from 'react';
import { Navbar, Feature, Brand} from './components';
import { Header, WhatAce} from './containers';
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
    </div>
  )
}

export default App