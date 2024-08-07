import React from 'react'
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import MovingText from 'react-moving-text'
export default function Hero() {
   
    // const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const threshold = 100;
    //     const scrollTop = window.scrollY;
        
    //     if (scrollTop > threshold) {
    //       setHasScrolledPastThreshold(true);
    //     }

    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //   window.removeEventListener('scroll', handleScroll);      
    //   };
    // });
    
    useEffect(()=>{
      gsap.set(".hero-h1-gsap",{y:0,opacity:1})
      gsap.set(".hero-button-gsap",{y:0,opacity:1})
      gsap.from(".hero-h1-gsap",{
        opacity:0,
        y:100,
        duration:2,
        scrollTrigger:{
        trigger:".hero-trigger",
          // start:"top 40%",          
        }
      })
      gsap.from(".hero-button-gsap",{
        opacity:0,
        duration:1,
        scrollTrigger:{
        trigger:".hero-trigger",
          // start:"top 40%",         
        }
      })
      gsap.set(".hero-line-gsap",{height:100})
      gsap.from(".hero-line-gsap",{
        height:0,        
        duration:1,
        scrollTrigger:{
        trigger:".hero-trigger",
          // start:"top 40%",
        }
      })
      gsap.to(".button-hide-gsap",{
        opacity:0,
        height:0,
        duration:1,
        scrollTrigger:{
        trigger:".hero-trigger",
        start:"top 25%"
        }
      })
    },[])
  return (
    // mx-[312px]
    <div className='min-h-[100vh] pl-[16.5vw] max-850:max-w-[88vw] mx-auto max-850:pl-[7.1vw] max-500:max-w-none max-500:pl-[8.3vw]'>    
  
    <div className='absolute top-[50%] mt-[-8vw] hero hero-trigger leading-[5vw]
      overflow-y-hidden max-850:leading-[6.3vw] max-850:mt-[-10vw] max-500:mt-[-35vw]'>
       <div className='text-[3.75vw] font-darius max-w-[49vw] text-[#c0c9df] max-850:text-[4.69vw] 
       max-850:max-w-[61vw] max-500:hidden'>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>We empower exceptional</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>teams and companies in</h1></div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>healthcare and healthtech</h1></div>
        </div>      
        <div className='hidden font-darius text-[#c0c9df] max-500:block text-[8.53vw] max-w-[77vw] leading-[11.5vw]
         '>  
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>We empower</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>exceptional teams</h1>
        </div>
        {/* <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>teams and </h1>
        </div> */}
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>and companies in</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>healthcare and</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>healthtech</h1>
        </div>
        </div>
    </div>
    
    <div className='absolute top-[84.6vh] max-850:top-[92.5vh] max-500:top-[92.1vh]'>
    
      <div className=" text-[0.75vw]  text-[white] tracking-[0.22vw] transition-opacity duration-500 hero-button-gsap font-graphikExtralight mb-[1.6vw] max-850:text-[1.465vw] 
      max-850:mb-[2.9vw] max-850:tracking-[0.40vw] max-500:text-[2.663vw] max-500:tracking-[0.8vw] max-500:mb-[4.9vw]">
      <button className='font-graphikLight text-[#FFFFFF] button-hide-gsap   
      '>SCROLL TO EXPLORE</button>
      </div>
     
      <div className='bg-[red] w-[0.188vw] h-[100px]  hero-line-gsap rounded-[100px] transition-all duration-500 button-hide-gsap ease-in-out ' >
      </div> 
      </div>
      </div>   
    
    
  )
}
