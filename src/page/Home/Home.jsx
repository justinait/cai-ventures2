import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero';
import Home2 from '../../components/Home2/Home2';
import Home3 from '../../components/Home3/Home3';

function Home() {
  return (
    <div className='homeContainer'>
        
        <Hero/>
        <Home2 />
        <Home3 />
        
    </div>
  )
}

export default Home