import React from 'react'
// import { useState } from 'react'
import logo from "../assets/logo.svg"
import { useState ,useEffect} from 'react'
export default function Header({isModalOpen,modalFunction}) {
  
    const [isImageVisible, setIsImageVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) { // You can adjust the threshold as needed
          setIsImageVisible(false);
        } else {
          setIsImageVisible(true);
        }
      };  
      window.addEventListener('scroll', handleScroll);  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
            
    <div className='fixed w-[100%] top-0'>    
    <div className='flex justify-between pl-[8.36vw] pr-[5.6vw] pt-[3.9vw] pb-[2.1vw] items-center 
    max-850:max-w-[88vw] mx-auto max-850:pl-[2.3vw] max-850:pt-[7vw] max-850:pr-[1.75vw] max-500:max-w-none 
    max-500:pl-[7.8vw] max-500:pr-[11.3vw]'>    
    <div className='flex cursor-pointer logoGroup items-center mainpart'>
      { isImageVisible && 
        <div className="transition-opacity duration-500 ease-in-out ">
        <img src={logo} alt="logo" className='h-[2.04vw] max-850:h-[3.7vw] max-500:h-[6.7vw]'/>
        </div>      
      }
        <div className='flex flex-col items-center ml-[-1.5vw] max-850:ml-[-2.7vw] max-500:ml-[-5vw]'>
        <div className='part w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-t-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-t-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-t-[0.7vw] 
        max-500:mb-[0.32vw]'></div>
        <div className='part w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-b-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-b-[0.7vw] max-500:mb-[0.32vw]'></div>
        <div className='part w-[0.9vw] h-[0.19vw] rounded-t-[3vw] bg-[white] border border-[white] mb-[0.15vw] max-850:h-[0.3vw] max-850:w-[1.3vw] max-850:mb-[0.32vw] max-500:h-[0.7vw] max-500:w-[3vw] max-500:mb-[0.42vw]'></div>
        <div className='part w-[1.5vw] h-[0.16vw] rounded-l-[100px] rounded-r-[100px] bg-[white] border border-[white]  mb-[0.15vw] max-850:h-[0.2vw] max-850:w-[2.3vw] max-500:h-[0.6vw] max-500:w-[5vw] max-850:mb-[0.32vw] max-500:mb-[0.42vw]'></div>
        <div className='part w-[0.9vw] h-[0.16vw] rounded-b-[3vw] bg-[white] border border-[white] mb-[0.15vw] max-850:h-[0.3vw] max-850:w-[1.3vw] max-850:mb-[0.32vw] max-500:h-[0.7vw] max-500:w-[3vw]  max-500:mb-[0.42vw]'></div>
        <div className='part w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-t-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-t-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-t-[0.7vw] max-500:mb-[0.32vw]'></div>
        <div className='part w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-b-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-b-[0.7vw]'></div>
        </div>
        </div>
       
      <div className='group flex items-center cursor-pointer' onClick={modalFunction}>
      {isImageVisible &&
        <h4 className='text-[0.6875vw] mr-[1.3vw] tracking-[0.3vw] font-graphikExtralight font-semibold
        group-hover:mr-[2.3vw] transform duration-1000 group-hover:opacity-[0.2] text-[#FFFFFF] 
         max-850:text-[1.612vw] max-850:mr-[3vw] max-850:group-hover:mr-[4vw] max-850:tracking-[0.6vw] max-500:text-[2.928vw] max-500:tracking-[0.9vw] max-500:mr-[5.9vw] max-500:group-hover:mr-[6.9vw]'>{isModalOpen?
         <div className='flex items-center'>
          <div className='mr-[6.1vw] max-850:opacity-0'>
            <span className='pr-[1.4vw] tracking-[0.1vw]'>EN</span> 
            <span className="tracking-[0.1vw]">PT</span> 
          </div>
        
         <span >CLOSE</span>
         </div>:'MENU'}</h4>
      }
        <div className='relative'>
        <div className=' relative h-[1.619vw] w-[1.619vw] flex items-center justify-center transition-all duration-700'> 
        <div className='border h-[1.619vw] w-[1.619vw] transform rotate-45 absolute group-hover:h-[3.2vw] border-[#FFFFFF] group-hover:w-[3.2vw] group-hover:opacity-[0.2] transition-all duration-700 
        max-850:h-[2.94vw] max-850:w-[2.94vw] max-850:group-hover:w-[4vw] max-850:group-hover:h-[4vw] 
        max-500:w-[5vw] max-500:h-[5vw] max-500:group-hover:w-[7vw] max-500:group-hover:h-[7vw]'>
        </div>        
        <div className='border h-[1.619vw] w-[1.619vw] absolute group-hover:h-[0.28vw] group-hover:w-[0.28vw] group-hover:bg-[white] flex justify-center items-start rotate-45 transition-all duration-700 opacity-0 group-hover:opacity-[1] max-850:h-[2.94vw] max-850:w-[2.94vw] max-850:group-hover:w-[0.31vw] max-850:group-hover:h-[0.31vw] max-500:w-[5vw] max-500:h-[5vw] max-500:group-hover:w-[0.35vw] max-500:group-hover:h-[0.35vw]'>        
        </div>        
        </div>
        </div>        
      </div>     
    </div>
    </div>
  )
}
