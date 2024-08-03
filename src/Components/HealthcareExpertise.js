import React, { useEffect } from 'react'
import gsap from 'gsap'
import BlueCircle  from './BlueCircle'
import GrayCircle from './GrayCircle'

export default function HealthcareExpertise() {
  
    useEffect(() => {
    gsap.set(".expertise-h1-gsap", { y: 0 });
    gsap.from(".expertise-h1-gsap",{
      y:500,
      duration:2,
      scrollTrigger:{
      trigger:".expertise-h1-trigger",
      start:"top 98%",       
      }
    })
    gsap.fromTo('.expertise-grayCircle-gsap',
      { strokeDasharray: '0, 1000' },
      {
        strokeDasharray: '1000, 0',
        duration:2,
        ease: 'none',           
        scrollTrigger: {
          trigger: '.expertise-grayCircle-trigger',  
          start:"top 80%",
        },
      },
    )       
    gsap.fromTo('.expertise-blueCircle-gsap',
      { strokeDasharray: '0, 1000' },
      {
        strokeDasharray: '1000, 0',
        duration:2,
        ease: 'none',           
        scrollTrigger: {
          trigger: '.expertise-blueCircle-trigger',
          start: 'top center',
          end: 'bottom center',
          start:'top 70%',                   
        },
      },
    )     
    gsap.fromTo("#grayCircleExpertise-no-trigger", 
      { innerText: 0 }, 
      { 
        innerText: 80,
        duration: 2, 
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#grayCircleExpertise-no-trigger",
          start: "top bottom", 
          toggleActions: "play none none none", 
          once: true,          
        },
        onUpdate: () => {          
          document.getElementById("grayCircleExpertise-no-trigger").innerText = `${Math.round(gsap.getProperty("#grayCircleExpertise-no-trigger", "innerText"))}+`;
        }
      }      
    );
    gsap.fromTo("#blueCircleExpertise-no-trigger", 
      { innerText: 0 }, 
      { 
        innerText: 1,
        duration: 4, 
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#blueCircleExpertise-no-trigger",
          start: "top bottom", 
          toggleActions: "play none none none", 
          once: true,          
        }
      }
    );
  }, []);   
  
  return (
    <div className='max-w-[1600px] expertise-grayCircle-trigger mx-auto pl-[12vw] expertise-h1-trigger max-1280:pl-[257px]'>
      <div className='flex  max-w-[1190px] max-1280:max-w-[790px]'>      
      <div className=' mr-[3.3vw] max-1280:max-w-[450px] '>
        <div className="overflow-y-hidden">
        <h1 className='font-darius text-[3.125vw] leading-[3.54vw] max-w-[36vw] text-[#c0c9df] expertise-h1-gsap max-1280:text-[38px] max-1280:leading-[47px]'>We have cultivated a unique set of expertise to enable all-around growth of healthcare bussiness</h1>
        </div>
        <p className='text-[1.25vw] font-graphikLight leading-[2.25vw] max-w-[30vw] 
        mt-[2.6vw] text-[#c0c9df] max-1280:text-[16px] max-1280:max-w-[420px] max-1280:leading-[28px] max-1280:tracking-[0.3px] max-1280:mt-[40px]'>With our capital, experienced partners, investment professionals, operators and network of advisors, we help healthcare businesses thrive.</p>
        <p className='text-[1.25vw] font-graphikLight leading-[2.25vw] max-w-[31vw] 
        mt-[2.3vw] text-[#c0c9df] max-1280:text-[16px] max-1280:max-w-[420px] max-1280:leading-[28px] max-1280:tracking-[0.3px] max-1280:mt-[25px]'>We are experts in fueling the best companies that want to be the driving force of the future of healthcare.</p>
        <a href="#" className='max-w-[742px]'>
        <p className='flex justify-end max-w-[110px] text-[18px] font-graphikLight py-[20px] border-y-[2px] mt-[3.5vw] text-[#FFFFFF] max-1280:py-[15px] max-1280:text-[16px] max-1280:max-w-[90px] max-1280:mt-[50px]'>APPROACH</p>
        </a>      
      </div>
      <div className='flex flex-col items-center'>
        <div className='relative expertise-grayCircle-gsap'>
        <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikLight max-1280:text-[50px]' 
        id='grayCircleExpertise-no-trigger'></h1>
        <GrayCircle/>
        </div>
        <p className='text-[1.062vw] max-w-[9vw] font-graphikLight text-center mt-[1.8vw] leading-[1.4vw] text-[#FFFFFF80] max-1280:text-[14px] expertise-blueCircle-trigger
        max-1280:tracking-[0.5px] max-1280:max-w-[180px] max-1280:leading-[20px]'>Acquisitions by our companies</p>        
        <div className='pt-[85px]'>
        <div className=' relative expertise-blueCircle-gsap'>
        <h1 className='text-[#FFFFFF] text-[80px] absolute w-full h-full flex justify-center items-center font-graphikLight max-1280:text-[50px]' id='blueCircleExpertise-no-trigger'></h1>
        <BlueCircle/>
        </div>
        </div>
        <p className='text-[1.062vw] max-w-[12vw] font-graphikLight text-center 
        mt-[1.8vw]  leading-[1.4vw] text-[#FFFFFF80] max-1280:text-[14px] max-1280:tracking-[0.5px] max-1280:max-w-[180px] max-1280:leading-[20px] 
        '>Sector in which we invest</p>
      </div>
      </div>
      <div className='flex justify-between max-w-[1130px]'>     
      <div className='flex flex-col items-center'>        
      </div>
      </div>
    </div>
  )
}
