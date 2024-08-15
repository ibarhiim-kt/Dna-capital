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
    <div className=' expertise-grayCircle-trigger pl-[20.5vw] expertise-h1-trigger 
    max-850:max-w-[88vw] max-850:pl-0 mx-auto max-500:max-w-none'>
      {/* max-w-[1190px]  */}
      <div className='flex max-850:flex-col' >      
      <div className=' mr-[7vw] max-850:pl-[7.1vw] max-850:pb-[11vw] max-850:mr-0 
      max-500:pl-[8.3vw] max-500:pb-[18vw]'>  
        <div className="overflow-y-hidden">
        <h1 className='font-darius text-[3.125vw] leading-[3.74vw] max-w-[36vw] text-[#c0c9df] expertise-h1-gsap  max-850:text-[3.96vw] max-850:leading-[4.471vw] max-850:max-w-[69vw]  max-500:text-[7.19vw] max-500:leading-[7.581vw] max-500:max-w-[82vw]'>We have cultivated a unique set of expertise to enable all-around growth of healthcare businesses</h1>
        </div>
        <p className='text-[1.25vw] font-graphikLight leading-[2.25vw] max-w-[30vw] 
        mt-[2.6vw] text-[#c0c9df] max-850:max-w-[72vw] max-850:mt-[6.6vw] max-850:text-[2.199vw] max-850:leading-[3.77vw] max-500:text-[4vw] max-500:leading-[6.77vw]'>With our capital, experienced partners, investment professionals, operators and network of advisors, we help healthcare businesses thrive.</p>
        <p className='text-[1.25vw] font-graphikLight leading-[2.25vw] max-w-[31vw] 
        mt-[2.3vw] text-[#c0c9df] max-850:mt-[3.3vw] max-850:leading-[3.77vw] max-850:text-[2.199vw] max-850:max-w-[72vw] max-500:text-[4vw] max-500:leading-[6.77vw] max-500:max-w-[81vw]'>We are experts in fueling the best companies that want to be the driving force of the future of healthcare.</p>
        <a href="#" className='max-w-[742px]'>
        <p className='flex justify-end max-w-[110px] text-[18px] font-graphikLight py-[20px] border-y-[2px] mt-[3.5vw] text-[#FFFFFF] max-850:mt-[9vw] max-500:mt-[15vw]'>APPROACH</p>
        </a>      
      </div>
      <div className='flex flex-col items-center'>
        <div className='relative expertise-grayCircle-gsap'>
        <h1 className='text-[#FFFFFF] text-[4.063vw] absolute w-full h-full flex justify-center items-center font-graphikLight max-850:text-[5.86vw] max-500:text-[10.652vw]' 
        id='grayCircleExpertise-no-trigger'></h1>
        <GrayCircle/>
        </div>
        <p className='text-[1.062vw] max-w-[9vw] font-graphikLight text-center mt-[1.8vw] leading-[1.4vw] text-[#FFFFFF80]  expertise-blueCircle-trigger max-850:text-[2.199vw] max-850:max-w-[19vw]  max-850:leading-[3vw] max-850:mt-[3.6vw] max-500:leading-[5.2vw] max-500:text-[4vw] max-500:max-w-[34vw] max-500:mt-[6.6vw]'>Acquisitions by our companies</p>        
        <div className='pt-[4.3vw] max-850:pt-[7vw] max-500:pt-[11vw]'>
        <div className=' relative expertise-blueCircle-gsap'>
        <h1 className='text-[#FFFFFF] text-[4.063vw] absolute w-full h-full flex justify-center items-center font-graphikLight max-850:text-[5.86vw] max-500:text-[10.652vw]' id='blueCircleExpertise-no-trigger'></h1>
        <BlueCircle/>
        </div>
        </div>
        <p className='text-[1.062vw] max-w-[12vw] font-graphikLight text-center 
        mt-[1.8vw] leading-[1.4vw] text-[#FFFFFF80] max-850:mt-[3.6vw] max-850:max-w-[25vw] max-850:text-[2.199vw] max-500:leading-[5.2vw] max-500:text-[4vw] max-500:mt-[6.6vw] max-500:max-w-[45vw]'>Sector in which we invest</p>
      </div>
      </div>
      <div className='flex justify-between max-w-[1130px]'>     
      <div className='flex flex-col items-center'>        
      </div>
      </div>
    </div>
  )
}
