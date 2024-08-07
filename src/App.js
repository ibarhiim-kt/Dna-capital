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

import { useState } from 'react';
function App() {
  const[isModalOpen, setIsModalOpen] = useState();
  const modalFunction=()=>{
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className='bg-[#3c3c3d] min-h-[100vh] background' >
      
      <Header isModalOpen={isModalOpen} modalFunction={modalFunction}/>   
      {isModalOpen && <Modal/> }
      {!isModalOpen && <Hero/> } 
      {!isModalOpen && <HealthcareInvestor/>}
      {!isModalOpen && <HealthcareExperience/>}
      {!isModalOpen && <HealthcareExpertise/>}
      {!isModalOpen && <Investing/> }
      {!isModalOpen && <Footer/> }    
    </div>

  );
}

export default App;
