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
    // <div className='lg:mx-[310px] max-1527:mx-[275px] max-1180:mx-[194px] max-929:mx-[153px]  max-800:mx-[100px] max-593:mx-[70px] max-470:mx-[40px] min-h-[100vh]'>    
    // <div className='mt-[-160px] absolute top-[50%]  hero hero-trigger leading-[100px]  max-1527:leading-[80px] max-1180:leading-[69px] max-929:leading-[60px]   max-470:max-w-[400px] max-367:leading-[43px] max-367:mx-[30px]'>       
    //    <h1 className='text-[71px] font-darius max-w-[1000px] tracking-[-1px]
    //    text-[#c0c9df] hero-h1-gsap max-1527:max-w-[760px] 
    //    max-1527:text-[50px] max-1180:text-[43px] max-1180:max-w-[650px] 
    //    max-929:max-w-[520px] max-929:text-[35px] max-800:text-[30px] max-800:max-w-[430px]  max-800:tracking-normal max-593:text-[25px] max-593:max-w-[390px]  max-593:leading-[50px] max-470:text-[20px] max-470:max-w-[300px] max-470:tracking-[1px] max-367:text-[18px]'>We empower exceptional teams and companies in healthcare and healthtech</h1>        
    // </div>
    // <div className='absolute top-[86%] '>
    //   <div className=" text-[14px] pl-[3px] text-[white] tracking-[4px]  transition-opacity duration-500 hero-button-gsap font-graphik mb-[20px]">
    //   <button className='font-graphikLight text-[#FFFFFF] button-hide-gsap'>SCROLL TO EXPLORE</button>
    //   </div>
    //   <div className={`bg-[red] w-[3px] h-[100px] hero-line-gsap ml-[3px] mt-[0px] rounded-[100px] transition-all duration-500 button-hide-gsap ease-in-out `} >
    //   </div> 
    //   </div>
    //   </div>   
    // h-800:mx-[275px] h-700:mx-[257px] h-650:mx-[228px] h-600:mx-[205px]
    <div className='min-h-[100vh] mx-[312px] max-1440:mx-[238px] max-1280:mx-[208px] 
    max-1024:mx-[170px] max-845:max-w-[742.72px] max-845:mx-auto max-845:pl-[60px] 
    max-647:max-w-[569.65px] max-647:px-[50px] max-524:max-w-[461.42px] max-524:px-[36px]  max-411:px-[35px] max-380:px-[30x]'>    
  {/* h-800:leading-[90px] h-800:mt-[-143px] h-700:leading-[85px] h-700:mt-[-134px] h-650:mt-[-118px] h-650:leading-[75px] h-600:leading-[67px] h-600:mt-[-108px] */}
  {/* h-800:max-w-[900px] h-700:max-w-[800px] h-650:max-w-[700px] h-600:text-[47px]   h-600:max-w-[600px] */}
    <div className='mt-[-160px] absolute top-[50%] hero hero-trigger leading-[100px]
      max-1440:mt-[-125px] max-1280:mt-[-108px] max-1280:leading-[68px] max-1527:leading-[80px] overflow-y-hidden max-1024:leading-[49px] max-1024:text-[38.4px] 
      max-1024:mt-[-82px] max-647:mt-[-70px] max-524:leading-[35px] max-524:mt-[-52px] 
      max-411:leading-[50px] max-411:mt-[-148px] max-380:leading-[42px] '>
       <div className='text-[71px] font-darius max-w-[1000px] tracking-[-1px]
       text-[#c0c9df] max-1527:max-w-[760px] max-1527:text-[50px] max-1440:text-[54px] max-1280:text-[48px] max-1280:max-w-[700px] max-1280:tracking-[-1.2px] max-1024:text-[38.4px] max-1024:max-w-[570px] max-1024:tracking-[1px] 
       max-647:text-[30.3189px] max-524:text-[24.5618px] max-411:hidden'>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>We empower exceptional</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>teams and companies in</h1></div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>healthcare and healthtech</h1></div>
        </div>      
        <div className='hidden font-darius text-[#c0c9df] max-411:block text-[35.104px] 
         max-380:text-[29px] '>  
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>We empower</h1>
        </div>
        <div className='overflow-y-hidden'>
        <h1 className='hero-h1-gsap'>exceptional teams</h1>
        </div>
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
    
    <div className='absolute max-1440:top-[92%] max-1280:top-[83.9%] 
    max-1024:top-[94%] max-845:top-[92.4%] max-647:top-[94%] max-524:top-[95%] max-411:top-[93.2%]'>
    {/* h-800:text-[12px] h-800:mb-[24px] h-700:text-[11px] h-700:mb-[22px] h-650:text-[9px] h-650:mb-[20px] h-600:mb-[18px] h-600:text-[8px] h-600:tracking-[3.5px] */}
      <div className=" text-[14px]  text-[white] tracking-[3.5px]  transition-opacity duration-500 hero-button-gsap font-graphik mb-[31px] max-1440:text-[12px] max-1280:mb-[18px] max-845:mb-[20px] max-524:mb-[15px]">
      <button className='font-graphikLight text-[#FFFFFF] button-hide-gsap max-1440:tracking-[2px] max-1280:text-[9.2px] max-1280:tracking-[2.5px] 
      max-1024:text-[7.68px] max-1024:tracking-[1.5px] max-845:text-[12.37px] 
      max-845:tracking-[3px] max-647:text-[9px] max-647:tracking-[2.5px] max-524:text-[7.5px] max-524:tracking-[2px] max-411:text-[10.9689px] max-411:tracking-[3px]  
      max-411:mb-[3px] max-380:text-[9px]'>SCROLL TO EXPLORE</button>
      </div>
      {/* h-600:w-[2px]
          h-600:h-[10px] */}
      <div className='bg-[red] w-[3px] h-[100px]  hero-line-gsap rounded-[100px] transition-all duration-500 button-hide-gsap ease-in-out max-1280:w-[1.5px] 
      max-1280:h-[70px] ' >
      </div> 
      </div>
      </div>   
    
    
  )
}
