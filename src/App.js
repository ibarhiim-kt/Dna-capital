// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import HealthcareInvestor from './Components/HealthcareInvestor';
import HealthcareExperience from './Components/HealthcareExperience';
import HealthcareExpertise from './Components/HealthcareExpertise';
import Investing from './Components/Investing';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Background from './Components/Background';
// import Team from './Components/Teams/Hero';
import Teams from './Components/Teams/App';
import OurDna from './Components/OurDna/App'

import Approach from './Components/Approach/App'
import { useState } from 'react';
import Cursor from './Components/Cursor';

function App() {
  const[isModalOpen, setIsModalOpen] = useState();
  const modalFunction=()=>{
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className='bg-[hsl(240,1%,24%)] min-h-[100vh] mm'>  
    <Cursor/>
      {/* <Background/> */}
      <Header isModalOpen={isModalOpen} modalFunction={modalFunction}/> 
      {isModalOpen && <Modal/> }
      {!isModalOpen && <Hero/> } 
      {!isModalOpen && <HealthcareInvestor/>}
      {!isModalOpen && <HealthcareExperience/>}
      {!isModalOpen && <HealthcareExpertise/>}
      {!isModalOpen && <Investing/> }
      {!isModalOpen && <Footer/> }   
      
      {/* <Teams/> */}
      {/* <Approach/> */}
      {/* <OurDna/> */}
    </div>
  );
}

export default App;
