import React from 'react'
import logo from "../assets/logo.svg"
export default function Footer() {
  return (
    <div className='bg-[black]'>
      <div className='max-w-[1600px] max-1280:max-w-[1052px] mx-auto pt-[14rem] pb-[5rem] max-1280:pb-[3rem] max-1280:pt-[10rem]'>
      <div className='flex max-w-[1170px] justify-between mb-[11rem] font-graphik text-[white] max-1280:max-w-[775px] max-1280:mb-[8rem]'>  
      <div className='flex'>
        <div>
        <img src={logo} alt="logo" className='max-1280:h-[27px]'/>
        </div>
        <div className='flex flex-col items-center ml-[-30px] max-1280:ml-[-20px]'>
        <div className='w-0 h-0 border-l-[4px] border-r-[4px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] 
         max-1280:border-l-[3px] max-1280:border-r-[3px]'></div>
        <div className='w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] max-1280:border-l-[3px] max-1280:border-r-[3px]'></div>
        <div className='w-[20px] h-[4px] rounded-t-[10px] bg-[white] border border-[white] mb-[2px] max-1280:h-[2px] max-1280:w-[14px]'></div>
        <div className='w-[30px] h-[4px] rounded-l-[100px] rounded-r-[100px] bg-[white] border border-[white] mb-[2px] max-1280:h-[2px] max-1280:w-[20px]'></div>
        <div className='w-[20px] h-[4px] rounded-b-[10px] bg-[white] border border-[white] mb-[2px] max-1280:h-[2px] max-1280:w-[14px]'></div>
        <div className='w-0 h-0 border-l-[4px] border-r-[4px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] max-1280:border-l-[3px] max-1280:border-r-[3px]'></div>
        <div className='w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] max-1280:border-l-[3px] max-1280:border-r-[3px]'></div>
      </div>
      </div>
        <div className='text-[20px] tracking-[2px] flex flex-col gap-[40px] 
        max-1280:text-[13px] max-1280:gap-[27px]'>
            <a href="#" className='hover:text-[gray] transition duration-300'>OUR DNA</a>
            <a href="#" className='hover:text-[gray] transition duration-300'>APPROACH</a>
            <a href="#" className='hover:text-[gray] transition duration-300'>TEAM</a>   
        </div>
        <div className='text-[20px] tracking-[2px] flex flex-col gap-[40px] max-1280:text-[13px] max-1280:gap-[27px]'>
            <a href="#" className='hover:text-[gray] transition duration-300'>COMPANIES</a>
            <a href="#" className='hover:text-[gray] transition duration-300'>CAREERS</a>
            <a href="#" className='hover:text-[gray] transition duration-300'>NEWS</a> 
        </div>
        <div className='text-[20px]  flex flex-col gap-[40px] max-1280:text-[13px] 
         max-1280:gap-[27px]'>
            <a href="#" className='tracking-[2px] hover:text-[gray] transition duration-300'>CONTACT</a>
            <a href="#" className=' text-[25px] font-bold hover:text-[gray] transition duration-300 max-1280:text-[15px]'>in</a>            
        </div>
        </div>
        <div className='flex justify-end max-w-[1520px] text-[13.5px] tracking-[1px] text-[gray] max-1280:text-[8px] max-1280:max-w-[1000px] max-1280:tracking-[1.3px]'>
            <a href="" className='mr-[75px] hover:text-[#b4b1b1] transition duration-300
             max-1280:mr-[50px] '>LEGAL AND REGULATORY INFORMATION</a>
            <a href="" className='hover:text-[#b4b1b1] transition duration-300'>TERMS AND CONDITIONS</a>
        </div>
      </div>
    </div>
  )
}
