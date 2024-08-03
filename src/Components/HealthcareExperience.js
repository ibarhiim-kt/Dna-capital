import React, { useEffect } from 'react'
import gsap from 'gsap'
// max-w-[1110px] pt-[135.742px] pr-[34.6979px] pb-[155.133px] 
    // pl-[340px]
export default function HealthcareExperience() {
  
  useEffect(()=>{
    gsap.set(".bg-trigger",{ x:0 });
    gsap.from(".bg-trigger",{
      x:1100,
      duration:2,
      scrollTrigger:{
        trigger:".bg-trigger"
      }
    })
  })
  return (
    // max-1280:mt-[22.5rem] max-1280:mb-[15.5rem]
    <div className='max-w-[2000px] max-850:max-w-[88vw] 
      mx-auto mb-[23.2vw] mt-[33vw] text-[#c0c9df] overflow-hidden max-850:flex 
      max-850:justify-end max-850:[58vw] '>
      <div className='w-[58%] ml-[42%] relative max-850:ml-0 max-850:w-[92.3%] '>
      <div className='pt-[8.5vw] pr-[2.5vw] pb-[10vw] 
      pl-[16.5vw]  top-[640px]  max-850:pt-[13.92vw] 
      max-850:px-[6.792vw] max-850:pb-[6.648vw] 
      '>
          
        <div style={{background:"linear-gradient(143deg, #423676, rgba(38, 177, 245, 0) 88%)", transform:"translate(0%,0px)",  willChange:"transform", transformOrigin:"right top"}} className='absolute w-[100%] h-[100%] top-0 left-0 
         opacity-[0.1] bg-trigger'></div>
         {/* max-1280:text-[64px] max-1280:leading-[72px] */}
      <h1 className='font-darius text-[5vw] leading-[5.66vw] text-[#ffffff] 
       mb-[3.375vw] max-850:text-[5.86vw] max-850:leading-[6.8vw] max-850:mb-[4.39vw] '>We have deep healthcare experience</h1>
      {/* max-1280:text-[16px] max-1280:max-w-[350px] max-1280:leading-[1.8vw]
      max-1280:tracking-[0.3px] max-1280:mt-[50px] */}
      <p className='text-[1.25vw] leading-[2.2vw] font-graphikLight max-w-[25.5vw] 
      max-850:text-[2.19vw] max-850:max-w-[65.5vw] max-850:leading-[4vw] '>Our team is passionate about solving healthcare problems facing humanity. We have invested in and operated multiple businesses. We value strong partnerships with founders and management teams and we stand behind our companies through their evolution.</p>
      <a href="#">
      {/* max-1280:py-[15px] max-1280:text-[16px] 
      max-1280:max-w-[90px] */}
        <p className='flex text-[25px] max-w-[110px] font-graphikLight py-[20px] border-y-[2px] mt-[4.3vw] max-850:mt-[6.9vw] text-[#FFFFFF] '>Team</p>
      </a>
      </div>
      </div>
    </div>
  )
}
