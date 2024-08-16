// import logo from './logo.svg';
import Hero from './Hero';
import AdvisorNetwork from './AdvisorNetwork';
import Synergistic from './Synergistic';
import Graph from './Graph'
import Footer from '../Footer'
import { useState } from 'react';
function App() {  
  return (
    <div className="bg-[#1F1F26]">          
      <Hero/>
      <AdvisorNetwork/>
      <Synergistic/>
      <Graph/>
      <Footer/>
    </div>
  );
}

export default App;
