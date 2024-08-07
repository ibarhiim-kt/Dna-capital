import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlueCircle from './BlueCircle'
import GrayCircle from  './GrayCircle'

gsap.registerPlugin(ScrollTrigger);

export default function HealthcareInvestor() {
    
  // h1 anima
    useEffect(()=>{
    gsap.set(".investor-h1-gsap", { y: 0 });
    gsap.from(".investor-h1-gsap",{
      y:500,     
      duration:2,
      scrollTrigger:{
      trigger:".investor-h1-triggor",
      start:"top 98%",            
      }
    })

    gsap.set(".earlyStage-triggor", { y: 0,opacity:1 });
    gsap.from(".earlyStage-triggor",{
      opacity:0,      
      duration:2,
      y:100,
      scrollTrigger:{
      trigger:".earlyStage-triggor",   
      }
    })
    gsap.set(".lateStage-gsap", { y: 0,opacity:1 });
    gsap.from(".lateStage-gsap",{
      opacity:0,
      y:100,
      duration:2,
      scrollTrigger:{
      trigger:".lateStage-triggor",
      start:"top 90%",            
      }
    })
  })
    // gsap.to(".circle", {
    //   strokeDashoffset: 0,
    //   duration:3,
    //   scrollTrigger: {
    //     trigger: ".circle-container",
    //     start: "top bottom",
    //     end: "bottom top",  
    //     markers:true      
    //   }
    // });
    //  circles anima
   
  useEffect(() => {
    gsap.fromTo('.investor-blueCircle-gsap',
      { strokeDasharray: '0, 1000' },
      {
        strokeDasharray: '1000, 0',
        duration:2,
        ease: 'none',           
        scrollTrigger: {
          trigger: '.investor-blueCircle-trigger',
          start: 'top center',
          end: 'bottom center',                 
        },
      },
    )        
    gsap.fromTo('.investor-grayCircle-gsap',
      { strokeDasharray: '0, 1000' },
      {
        strokeDasharray: '1000, 0',
        duration:2,
        ease: 'none',           
        scrollTrigger: {
          trigger: '.investor-grayCircle-trigger',  
          start:"top 80%",
        },
      },
    )       
    gsap.fromTo("#blueCircle-no-trigger", 
      { innerText: 0 }, 
      { 
        innerText: 27,
        duration: 2, 
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#blueCircle-no-trigger",
          start: "top bottom", 
          toggleActions: "play none none none", 
          once: true,          
        }
      }
    );
    gsap.fromTo("#grayCircle-no-trigger", 
      { innerText: 0 }, 
      { 
        innerText: 30,
        duration: 2, 
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#grayCircle-no-trigger",
          start: "top bottom", 
          toggleActions: "play none none none", 
          once: true,          
        },
        onUpdate: () => {          
          document.getElementById("grayCircle-no-trigger").innerText = `${Math.round(gsap.getProperty("#grayCircle-no-trigger", "innerText"))}M+`;
        }
      }      
    );
  },[]);     
  
  return (
    // max-1280:pl-[214px] max-1280:pt-[260px]
    <div className='investor-blueCircle-trigger number-trigger pl-[17.2vw] investor-h1-triggor max-1280:pl-[17vw] max-850:pl-0 pt-[23vw] max-500:mt-[12vw]'>
      <div className='max-850:max-w-[88vw] mx-auto max-500:max-w-none'>      
      
      <div className='flex max-850:flex-col-reverse'>
      <div className='flex flex-col items-center mr-[13.2vw] relative max-850:mr-0'> 
      <div className='relative investor-blueCircle-gsap'>
      <h1 className='text-[#FFFFFF] text-[4.063vw] absolute w-full h-full flex justify-center items-center font-graphikExtralight max-850:text-[5.86vw] max-500:text-[10.652vw]' id="blueCircle-no-trigger"></h1>
      <BlueCircle/>
      </div>
      
        <p className='text-[1.062vw] max-w-[14vw] text-center leading-[1.4vw] mt-[1.8vw] text-[#FFFFFF80] font-graphikExtralight  max-1280:tracking-normal  max-850:text-[2.199vw] max-850:max-w-[24vw] max-850:mt-[3.6vw] max-850:leading-[2.747vw] max-500:text-[4vw] max-500:max-w-[43vw] max-500:leading-[5.2vw] max-500:mt-[6.6vw]'>Healtcare companies we have partnered with to-date</p>
      </div>
      {/* max-1280:text-[63px] max-1280:max-w-[330px] max-1280:leading-[80px] max-1280:pt-[45px]*/}
      <div className='max-850:pl-[7.1vw] max-500:pl-[8.3vw]'>      
      <div className='max-w-[500px] max-1280:max-w-[26vw] overflow-hidden max-850:max-w-[31vw] max-500:max-w-[60vw]'>
        <h1 className='font-darius text-[5vw] leading-[5.66vw] pt-[4.2vw] text-[#c0c9df] 
         investor-h1-gsap max-w-[27vw] max-1280:pt-[2.8vw] max-1280:tracking-[-1px] max-850:leading-[7vw]  max-850:mb-[9.3vw] max-850:pt-0 max-850:text-[5.862vw] max-500:text-[10.66vw] max-500:leading-[12.5vw] max-500:max-w-[43vw] max-500:mb-[16.3vw]'>We are healthcare investors</h1>         
      </div>
      <div className='hidden max-850:block max-850:max-w-[70vw] max-850:text-[2.199vw] max-500:max-w-[80vw] '>
      <p className='leading-[42px] text-[#c0c9df] font-graphikExtralight max-850:text-[2.199vw] max-850:leading-[3.77vw] max-850:mb-[7.1vw] max-500:leading-[6.77vw] max-500:text-[4vw] max-500:mb-[10vw]
        '>We partner with exceptional founders and management teams across all stages to build leading healthcare bussiness.</p>
      </div>
      </div>      
      </div>      
      <div className='flex mt-[3.9vw] investor-grayCircle-trigger max-850:justify-center'>
      <div className='flex flex-col items-center mr-[13.2vw] relative max-850:mr-0'>
        <div className='pt-[3.4vw] max-850:pt-[7vw] max-500:pt-[7.4vw]'> 
        <div className='relative investor-grayCircle-gsap'>
        
        <h1 className='text-[#FFFFFF] text-[4.063vw] absolute w-full h-full flex justify-center items-center font-graphikExtralight max-850:text-[5.86vw] max-500:text-[10.652vw]' id='grayCircle-no-trigger'></h1>       
        <GrayCircle/>
        </div>
        </div>
        
        <p className='text-[1.062vw] max-w-[13vw] text-center leading-[1.4vw] mt-[1.8vw] text-[#FFFFFF80] font-graphikExtralight max-850:max-w-[24vw] max-850:mt-[3.6vw] max-850:leading-[2.747vw] max-850:text-[2.199vw] max-500:text-[4vw] max-500:max-w-[43vw] max-500:leading-[5.2vw]  max-500:mt-[6.6vw]'>Million patients treated annually by our companies</p>
      </div>
      
      <div className='max-w-[25vw]'>
        <p className='text-[1.25vw] leading-[2.25vw] text-[#c0c9df] font-graphikExtralight max-850:hidden
        '>We partner with exceptional founders and management teams across all stages to build leading healthcare businesses.</p>
      </div>
      </div>
      
      <div className='overflow-y-hidden mt-[12.5vw] pl-[3.91vw]   max-850:pl-[7.7vw] max-500:pl-[8.3vw] max-500:mt-[20vw]'>
      
        <div className='flex  earlyStage-triggor  max-850:text-[48.5px] max-850:flex-col '> 
       
            <h1 className='text-[3.125vw] font-darius  text-[#FFFFFF]  leading-[3.531vw] mr-[13.5vw] pr-[15vw] max-w-[9vw] max-850:text-[3.96vw] max-850:max-w-[11vw] max-850:leading-[4.471vw] max-850:mb-[2.93vw] max-850:pr-0 max-850:mr-0 max-500:leading-[7.581vw] max-500:text-[7.19vw] max-500:mb-[5.3vw]'>Early Stage</h1>
            
            <p className='text-[#c0c9df] lateStage-triggor font-graphikExtralight  leading-[2.25vw] text-[1.25vw] max-w-[26vw] max-850:text-[2.199vw] max-850:max-w-[67vw] max-850:leading-[3.77vw] max-500:text-[4vw] max-500:leading-[6.77vw] max-500:max-w-[76vw] '>We invest in early-stage companies having the potential to shape the future of healthcare.</p>
        </div>
        
        <div className='flex lateStage-gsap mt-[7.032vw] max-850:flex-col '>
            <h1 className=' font-darius text-[#FFFFFF] 
            text-[3.125vw] max-w-[9vw] leading-[3.531vw] mr-[13.5vw] pr-[15vw] max-850:pr-0 max-850:mr-0 max-850:mb-[2.93vw] max-850:leading-[4.471vw] max-850:text-[3.96vw] max-850:max-w-[11vw] max-500:leading-[7.581vw] 
            max-500:text-[7.19vw] max-500:mb-[5.3vw]'>Late Stage</h1>
            <p className='font-graphikExtralight  text-[#c0c9df]  leading-[2.25vw] text-[1.25vw] max-w-[28vw]  max-850:text-[2.199vw] max-850:max-w-[73vw] max-850:leading-[3.77vw] max-500:text-[4vw] max-500:leading-[6.77vw] max-500:max-w-[76vw] '>We invest across the length and breadth of healthcare, identifying and focusing on companies that share our passion for high quality, ethical and humane products and services.</p>
        </div>
      </div>
      <a href="#" className='max-w-[742px] flex justify-end mt-[7.7vw] max-1280:max-w-[505px] max-1280:mt-[80px] max-1024:max-w-[442px] max-850:pl-[7.7vw] max-850:justify-start'>
        <p className='text-[#FFFFFF] max-w-[110px] text-[18px] font-semibold py-[20px] border-y-[2px] max-1280:max-w-[774px] max-1280:py-[15px] max-1280:text-[14px]'>COMPANIES</p>
      </a>
      </div>
    </div>
  )
}
