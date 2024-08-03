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
    <div className='investor-blueCircle-trigger number-trigger max-w-[1600px] mx-auto pl-[175px] pt-[430px] max-1440:pt-[300px] investor-h1-triggor max-1440:pl-[232px]  max-1280:pl-[17vw] max-850:pl-0 max-1280:pt-[23vw] max-1024:pl-[0px] max-1024:max-w-[900px]
    max-1024:mx-auto'>
      <div className='max-850:max-w-[88vw] mx-auto max-500:max-w-none'>      
        {/* max-1280:max-w-[743px] justify-between */}
      <div className='flex justify-between max-w-[1110px] max-1440:max-w-[989px] max-1280:max-w-none max-1280:justify-normal max-1024:max-w-[617px] max-850:flex-col-reverse'>
      <div className='flex flex-col items-center relative max-1280:mr-[13vw] max-850:mr-0'> 
      <div className='relative investor-blueCircle-gsap'>
      <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikExtralight max-1440:text-[58.5px] max-1280:text-[4.064vw] max-1024:text-[41.6px] max-850:text-[5.86vw] max-500:text-[10.652vw]' id="blueCircle-no-trigger"></h1>
      <BlueCircle/>
      </div>
      {/* max-1280:text-[14px] max-1280:leading-[20px] max-1280:tracking-[0.5px] max-1280:max-w-[176px]*/}
        <p className='text-[20px] max-w-[270px] text-center leading-[25px] mt-[25px] text-[#FFFFFF80] font-graphikExtralight max-1440:text-[15.5px] max-1440:max-w-[230px] 
        max-1440:tracking-[1px] max-1440:leading-[20px]  max-1280:text-[1.07vw] max-1280:tracking-normal max-1280:mt-[1.67vw] max-1280:max-w-[13.5vw]  max-1280:leading-[1.46vw] max-850:text-[2.199vw] max-850:max-w-[24vw] max-850:mt-[3.6vw] max-850:leading-[2.747vw] max-500:text-[4vw] max-500:max-w-[43vw] max-500:leading-[5.2vw] max-500:mt-[6.6vw]'>Healtcare companies we have partnered with to-date</p>
      </div>
      {/* max-1280:text-[63px] max-1280:max-w-[330px] max-1280:leading-[80px] max-1280:pt-[45px]*/}
      <div className='max-850:pl-[7.1vw] max-500:pl-[8.3vw]'>      
      <div className='max-w-[500px] max-1280:max-w-[26vw] max-1527:text-[76.3px] overflow-hidden max-850:max-w-[30vw] max-500:max-w-[60vw]'>
        <h1 className='font-darius text-[95px] leading-[115px] pt-[65px] text-[#c0c9df] 
         investor-h1-gsap max-1440:pt-[52px] max-1440:text-[72px] max-1440:leading-[81px] max-1280:text-[5vw] max-1280:leading-[6vw] max-1280:pt-[2.8vw] max-1280:tracking-[-1px] max-850:leading-[7vw] max-1024:leading-[60px] max-1024:text-[51.2px] max-1024:max-w-[269px] max-850:mb-[9.3vw] max-850:pt-0 max-850:text-[5.862vw]   
         max-500:text-[10.66vw] max-500:leading-[12.5vw] max-500:max-w-[43vw] 
         max-500:mb-[16.3vw]'>We are healthcare investors</h1>         
      </div>
      <div className='max-w-[530px] max-1440:max-w-[400px] max-1280:max-w-[380px]  hidden  max-850:block max-850:max-w-[70vw] max-850:text-[2.199vw] max-500:max-w-[80vw] '>
      <p className='leading-[42px] text-[#c0c9df] font-graphikExtralight max-850:text-[2.199vw] max-850:leading-[3.77vw] max-850:mb-[7.1vw] max-500:leading-[6.77vw] max-500:text-[4vw] max-500:mb-[10vw]
        '>We partner with exceptional founders and management teams across all stages to build leading healthcare bussiness.</p>
      </div>
      </div>      
      </div>
      {/* max-1280:max-w-[798px] */}
      <div className='flex mt-[66px] justify-between max-w-[1153px]  investor-grayCircle-trigger max-1280:mt-[4vw] max-1280:max-w-none max-1280:justify-normal max-1440:max-w-[892px] max-1024:max-w-[658px] max-1024:mt-[38px] max-850:justify-center'>
      <div className='flex flex-col items-center relative max-1280:mr-[13vw] max-850:mr-0'>
        <div className='pt-[60px] max-1280:pt-[3.4vw] max-1024:pt-[20px] max-500:pt-[7.4vw]'> 
        <div className='relative investor-grayCircle-gsap'>
        {/* max-1280:text-[50px] */}
        <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikExtralight max-1440:text-[58.5px] max-1280:text-[4.064vw] max-1024:text-[41.6px] max-850:text-[5.86vw] max-500:text-[10.652vw]' id='grayCircle-no-trigger'></h1>       
        <GrayCircle/>
        </div>
        </div>
        {/* max-1280:max-w-[190px] */}
        <p className='text-[20px] max-w-[280px] text-center leading-[25px] mt-[25px] text-[#FFFFFF80] font-graphikExtralight max-1440:text-[15.5px] max-1440:max-w-[230px] 
        max-1440:tracking-[1px] max-1440:leading-[20px] max-1280:text-[1.07vw] max-1280:tracking-normal max-1280:mt-[1.67vw] max-1280:max-w-[13.5vw] max-1280:leading-[1.46vw] max-1024:text-[10.8px] max-1024:max-w-[177px] max-1024:tracking-[1.5px] max-1024:leading-[16px] max-850:max-w-[24vw] max-850:mt-[3.6vw] max-850:leading-[2.747vw] max-850:text-[2.199vw] max-500:text-[4vw] max-500:max-w-[43vw] max-500:leading-[5.2vw]  max-500:mt-[6.6vw]'>Million patients treated annually by our companies</p>
      </div>
      {/* max-1280:text-[16px] max-1280:max-w-[380px] max-1280:leading-[30px]*/}
      <div className='max-w-[530px] max-1440:max-w-[400px] max-1280:max-w-[25vw] max-1024:max-w-[305px]'>
        <p className='text-[25px] leading-[42px] text-[#c0c9df] font-graphikExtralight   max-1440:leading-[33px] max-1440:text-[18px] max-1280:leading-[2vw] max-1280:text-[1.25vw] max-1024:text-[12.8px] max-1024:leading-[23px] max-1024:tracking-[1px] max-850:hidden
        '>We partner with exceptional founders and management teams across all stages to build leading healthcare businesses.</p>
      </div>
      </div>
      
      <div className='pl-[80px] overflow-y-hidden max-1440:pl-[51px]  mt-[258px] max-w-[1199px] max-1440:max-w-[915px] max-1280:mt-[12.5vw] max-1280:pl-[3.91vw]  max-1280:max-w-none max-850:pl-[7.7vw] max-500:pl-[8.3vw] max-500:mt-[20vw]'>
      {/* max-1280:max-w-[774px] */}
        <div className='flex justify-between  earlyStage-triggor   max-1280:max-w-none max-1280:justify-normal max-850:text-[48.5px] max-850:flex-col '> 
        {/* max-1280:text-[40px] max-1280:leading-[45px] */}
            <h1 className='text-[62px] font-darius leading-[60px] max-w-[160px] text-[#FFFFFF] max-1440:text-[45px] max-1280:text-[3.125vw] max-1280:leading-[3.4vw] max-1280:mr-[13vw] max-1280:pr-[16vw] max-1280:max-w-[9vw] max-1024:text-[32px] max-850:text-[3.96vw] max-850:max-w-[11vw] max-850:leading-[4.471vw] max-850:mb-[2.93vw] max-850:pr-0 max-850:mr-0 max-500:leading-[7.581vw] 
            max-500:text-[7.19vw] max-500:mb-[5.3vw]'>Early Stage</h1>
             {/* max-1280:max-w-[350px] */}
            <p className='text-[25px] leading-[38px] max-w-[555px] text-[#c0c9df] lateStage-triggor font-graphikExtralight max-1440:max-w-[423px] max-1440:leading-[33px] max-1440:text-[18px] max-1280:leading-[2vw] max-1280:text-[1.25vw] max-1280:max-w-[26vw] max-850:text-[2.199vw]  max-850:max-w-[67vw] max-850:leading-[3.77vw] max-500:text-[4vw] max-500:leading-[6.77vw] max-500:max-w-[76vw] '>We invest in early-stage companies having the potential to shape the future of healthcare.</p>
        </div>
        {/* max-1280:max-w-[370px] */}
        <div className='flex justify-between mt-[149px]  lateStage-gsap  max-1280:mt-[7.032vw]  max-1280:max-w-none max-1280:justify-normal max-1024:max-w-[702px] max-850:flex-col '>
            <h1 className='text-[62px] font-darius leading-[60px] max-w-[160px] text-[#FFFFFF] max-1440:text-[45px] max-1280:text-[3.125vw] max-1280:max-w-[9vw]   max-1280:leading-[3.4vw] max-1280:mr-[13vw] max-1280:pr-[16vw] max-850:pr-0 max-850:mr-0 max-850:mb-[2.93vw] max-850:leading-[4.471vw] max-850:text-[3.96vw] max-850:max-w-[11vw] max-500:leading-[7.581vw] 
            max-500:text-[7.19vw] max-500:mb-[5.3vw]'>Late Stage</h1>
            <p className='text-[25px] leading-[38px] font-graphikExtralight max-w-[555px] text-[#c0c9df] max-1440:leading-[33px] max-1440:max-w-[423px] max-1440:text-[18px] max-1280:leading-[2vw] max-1280:text-[1.25vw] max-1280:max-w-[28vw]  max-850:text-[2.199vw]  max-850:max-w-[73vw] max-850:leading-[3.77vw] max-500:text-[4vw] max-500:leading-[6.77vw] max-500:max-w-[76vw] '>We invest across the length and breadth of healthcare, identifying and focusing on companies that share our passion for high quality, ethical and humane products and services.</p>
        </div>
      </div>
      <a href="#" className='max-w-[742px] max-1440:max-w-[597px] flex justify-end mt-[145px] max-1280:max-w-[505px] max-1280:mt-[80px] max-1024:max-w-[442px] max-850:pl-[7.7vw] max-850:justify-start'>
        <p className='text-[#FFFFFF] max-w-[110px] text-[18px] font-semibold py-[20px] border-y-[2px] max-1280:max-w-[774px] max-1280:py-[15px] max-1280:text-[14px]'>COMPANIES</p>
      </a>
      </div>
    </div>
  )
}
