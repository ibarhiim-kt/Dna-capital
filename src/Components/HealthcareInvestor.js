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
          document.getElementById("grayCircle-no-trigger").innerText = `${Math.round(gsap.getProperty("#grayCircle-no-trigger", "innerText"))} M+`;
        }
      }      
    );
  },[]);     
  
  return (
    <div className='investor-blueCircle-trigger number-trigger max-w-[1600px] mx-auto pl-[175px] pt-[430px] investor-h1-triggor  max-1280:pl-[214px] max-1280:pt-[260px]'>
      <div className='flex justify-between max-w-[1110px] max-1280:max-w-[914px]'>
      <div className='flex flex-col items-center relative'> 
      <div className='relative investor-blueCircle-gsap'>
      <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikLight max-1280:text-[50px]' id="blueCircle-no-trigger">27</h1>
      <BlueCircle/>
      </div>
        <p className='text-[20px] max-w-[280px] text-center leading-[25px] mt-[25px] text-[#FFFFFF80] font-graphikLight max-1280:text-[14px] max-1280:tracking-[0.5px] max-1280:max-w-[190px] max-1280:leading-[20px]  
        '>Healtcare companies we have partnered with to-date</p>
      </div>
      <div className='max-w-[500px] max-1527:text-[76.3px] overflow-hidden'>
        <h1 className='font-darius text-[95px] leading-[115px] pt-[65px] text-[#c0c9df] 
         investor-h1-gsap max-1280:text-[63px] max-1280:leading-[80px] 
         max-1280:pt-[45px] max-1280:tracking-[-1px]'>We are healthcare investors</h1>
      </div>
      </div>
      <div className='flex mt-[66px] justify-between max-w-[1153px] max-1527:max-w-[1080px] max-1280:max-w-[798px] investor-grayCircle-trigger'>
      <div className='flex flex-col items-center relative '>
        <div className='pt-[60px]'> 
        <div className='relative investor-grayCircle-gsap'>
        <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikLight max-1280:text-[50px]' 
        id='grayCircle-no-trigger'></h1>       
        <GrayCircle/>
        </div>
        </div>
        <p className='text-[20px] max-w-[280px] text-center leading-[25px] mt-[25px] text-[#FFFFFF80] font-graphikLight max-1280:text-[14px] 
        max-1280:tracking-[0.5px] max-1280:max-w-[190px] max-1280:leading-[20px]'>Million patients treated annually by our companies</p>
      </div>
      <div className='max-w-[530px] max-1527:max-w-[445px] max-1280:max-w-[380px]'>
        <p className='text-[25px] leading-[42px] text-[#c0c9df] font-graphikLight max-1527:text-[19.0745px] max-1280:leading-[30px] max-1280:text-[16px] 
        '>We partner with exceptional founders and management teams across all stages to build leading healthcare bussiness.</p>
      </div>
      </div>
      <div className='mt-[258px] max-w-[1199px] max-1280:mt-[140px] overflow-y-hidden'>
        <div className='flex justify-between pl-[80px] earlyStage-triggor 
        max-1280:pl-[50px] max-1280:max-w-[774px]'>
            <h1 className='text-[62px] font-darius leading-[60px] max-w-[160px] text-[#FFFFFF] max-1280:text-[40px] max-1280:leading-[45px]'>Early Stage</h1>
            <p className='text-[25px] leading-[38px] max-w-[555px] text-[#c0c9df] lateStage-triggor max-1280:leading-[30px] max-1280:text-[16px] 
            max-1280:max-w-[350px]'>We invest in early-stage companies having the potential to shape the future of healthcare.</p>
        </div>
        <div className='flex justify-between mt-[149px] pl-[80px] lateStage-gsap max-1280:pl-[50px] max-1280:mt-[90px] max-1280:max-w-[795px]'>
            <h1 className='text-[62px] font-darius leading-[60px] max-w-[160px] text-[#FFFFFF] max-1280:text-[40px] max-1280:leading-[45px] '>Late Stage</h1>
            <p className='text-[25px] leading-[38px] max-w-[555px] text-[#c0c9df] 
            max-1280:leading-[30px] max-1280:text-[16px] max-1280:max-w-[370px]'>We invest across the length and breadth of healthcare, identifying and focusing on companies that share our passion for high quality, ethical and humane products and services.</p>
        </div>
      </div>
      <a href="#" className='max-w-[742px] flex justify-end mt-[145px] max-1280:max-w-[505px] max-1280:mt-[80px]'>
        <p className='flex justify-end text-[#FFFFFF] max-w-[110px] text-[18px] font-semibold py-[20px] border-y-[2px] max-1280:max-w-[774px] max-1280:py-[15px] max-1280:text-[14px]'>COMPANIES</p>
      </a>
      {/* <div className='h-[150px] w-[150px] border-[4px] rounded-full half-circle flex 
      justify-center items-center' ref={boxref}></div> */}
    </div>
  )
}
