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
    <div className='max-w-[2000px] mx-auto mb-[27.5rem] mt-[39.2rem] text-[#c0c9df] overflow-hidden max-1280:mt-[22.5rem] max-1280:mb-[15.5rem] '>
      <div className='w-[58%] ml-[42%] relative'>
      <div className='pt-[8.7rem] pr-[4.1666666667%] pb-[10rem] 
      pl-[29.1666666667%] right-[-146px] top-[640px]'>
        <div style={{background:"linear-gradient(143deg, #423676, rgba(38, 177, 245, 0) 88%)", transform:"translate(0%,0px)",  willChange:"transform", transformOrigin:"right top"}} className='absolute w-[100%] h-[100%] top-0 left-0 
         opacity-[0.1] bg-trigger'></div>
      <h1 className='font-darius text-[100px] leading-[110px] text-[#ffffff] 
      max-1280:text-[64px] max-1280:leading-[72px]'>We have deep healthcare experience</h1>
      <p className='text-[25px] leading-[42px] font-graphikLight max-w-[470px] mt-[75px] tracking-[-1px] max-1280:text-[16px] max-1280:max-w-[350px] max-1280:leading-[28px]
         max-1280:tracking-[0.3px] max-1280:mt-[50px]'>Our team is passionate about solving healthcare problems facing humanity. We have invested in and operated multiple businesses. We value strong partnerships with founders and management teams and we stand behind our companies through their evolution.</p>
      <a href="#">
        <p className='flex text-[25px] max-w-[110px] font-graphikLight py-[20px] border-y-[2px] mt-[85px] text-[#FFFFFF] max-1280:py-[15px] max-1280:text-[16px] 
        max-1280:max-w-[90px]'>Team</p>
      </a>
      </div>
      </div>
    </div>
  )
}
