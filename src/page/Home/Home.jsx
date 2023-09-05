
import Hero from '../../components/Hero/Hero';
import Home2 from '../../components/Home2/Home2';
import Home3 from '../../components/Home3/Home3';
import Card1 from '../../components/cardHome/Card1/Card1';
import Card2 from '../../components/cardHome/Card2/Card2';
import Card3 from '../../components/cardHome/Card3/Card3';

function Home() {
  
  return (
    <div className='homeContainer'>
        
      <Hero/>
      <Home2 />

      <Home3 />
      
      <Card1/>
      <Card2/>
      <Card3/>
        
    </div>
  )
}

export default Home