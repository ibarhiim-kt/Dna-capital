import React, { useEffect } from 'react'
import gsap from 'gsap'
export default function Rough() {
    useEffect(()=>{
    gsap.to(".circle", {
        strokeDashoffset: 0,
        duration:3,
        scrollTrigger: {
          trigger: ".circle-container",
          start: "top bottom",
          end: "bottom top",
          // markers:true,
        //   scrub: true
        }
      });
    })
  return (
  <div className='relative h-[100vh]'>
  <svg viewBox="-48 0 250 100" className='rotate-90 absolute top-0 left-[165px]' width="200" height="100">
  <path d="M 3,100 A 100,100 0 0,1 200,100" fill="none" stroke="blue" stroke-width="4"/>
  
  </svg>
  <svg viewBox="0 0 250 100" className='rotate-[-90deg] absolute top-0 '>
  <path d="M 3,100 A 100,100 0 0,1 200,100" fill="none" stroke="blue" stroke-width="4"/>
  
  </svg>
  </div>
  )
}
