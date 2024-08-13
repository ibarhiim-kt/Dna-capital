import React from 'react'
import logo from "../assets/logo.svg"
import linkedin from "../assets/linkedin.svg"

export default function Footer() {
  
  return (
    <div className='bg-[black] pl-[8.3vw] pt-[11.875vw] pb-[3.75vw] max-850:pb-[7.328vw] max-850:pl-0 max-500:pt-[24.966vw] max-500:pb-[16.76vw]'>
      <div className='max-850:max-w-[88vw] mx-auto max-850:pl-[7.1vw] max-500:max-w-none max-500:pl-[17vw]'>
      <div className='flex  mb-[9.69vw] font-semibold font-graphikExtralight text-[white] max-500:flex-col max-500:mb-[18vw]'>  
      <div className='flex max-500:pb-[12vw]'>
        <div>
        <img src={logo} alt="logo" className='max-1280:h-[27px] h-[2.04vw] max-850:h-[3.09vw] max-500:h-[6.7vw]'/>
        </div>
        <div className='flex flex-col items-center ml-[-1.5vw] max-850:ml-[-2vw] max-500:ml-[-5vw]'>
        <div className='w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-t-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-t-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-t-[0.7vw] 
        max-500:mb-[0.32vw]'></div>
        <div className='w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-b-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-b-[0.7vw] max-500:mb-[0.32vw]'></div>
        <div className='w-[0.9vw] h-[0.19vw] rounded-t-[3vw] bg-[white] border border-[white] mb-[0.15vw] max-850:h-[0.3vw] max-850:w-[1.3vw] max-850:mb-[0.32vw] max-500:h-[0.7vw] max-500:w-[3vw] max-500:mb-[0.42vw]'></div>
        <div className='w-[1.5vw] h-[0.16vw] rounded-l-[100px] rounded-r-[100px] bg-[white] border border-[white]  mb-[0.15vw] max-850:h-[0.2vw] max-850:w-[2.3vw] max-500:h-[0.6vw] max-500:w-[5vw] max-850:mb-[0.32vw] max-500:mb-[0.42vw]'></div>
        <div className='w-[0.9vw] h-[0.19vw] rounded-b-[3vw] bg-[white] border border-[white] mb-[0.15vw] max-850:h-[0.3vw] max-850:w-[1.3vw] max-850:mb-[0.32vw] max-500:h-[0.7vw] max-500:w-[3vw]  max-500:mb-[0.42vw]'></div>
        <div className='w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-t-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-t-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-t-[0.7vw] max-500:mb-[0.32vw]'></div>
        <div className='w-0 h-0 border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] border-l-transparent border-r-transparent border-t-[white] mb-[0.15vw] max-850:border-l-[0.3vw] max-850:border-r-[0.3vw] max-850:border-b-[0.3vw] max-500:border-l-[0.7vw] max-500:border-r-[0.7vw] max-500:border-b-[0.7vw]'></div>
        </div>
        </div>
        <div className='text-[1vw] max-850:text-[1.7958vw] pl-[10.5vw] tracking-[0.1757vw] flex flex-col max-850:tracking-[0.35vw] max-850:pl-[10vw] max-500:text-[3.19vw] max-500:pl-0'>
            <a href="#" className='hover:text-[gray] pb-[2.1874vw] max-500:pb-[3.73vw]'>OUR DNA</a>
            <a href="#" className='hover:text-[gray] pb-[2.1874vw] max-500:pb-[3.73vw]'>APPROACH</a>
            <a href="#" className='hover:text-[gray] max-850:pb-[6.5vw] max-500:pb-[14vw]'>TEAM</a>
            <a href="#" className='tracking-[0.1757vw] hover:text-[gray] pb-[2.1874vw] hidden max-850:block max-500:hidden'>CONTACT</a>
            {/* <a href="#" className=' text-[25px] font-bold hover:text-[gray] max-1280:text-[15px] hidden max-850:block'>in</a>    */}
            <img src={linkedin} alt="LinkedIn Icon" className='h-[1.905vw] w-[1.905vw] hidden max-850:block max-500:hidden'/>
        </div>
        <div className='text-[1vw] max-850:text-[1.7958vw] pl-[10.5vw] tracking-[0.1757vw] flex flex-col   max-850:tracking-[0.35vw] max-850:pl-[10vw]  max-500:text-[3.19vw] max-500:pl-0'>
            <a href="#" className='hover:text-[gray] pb-[2.1874vw] max-500:pb-[3.73vw]'>COMPANIES</a>
            <a href="#" className='hover:text-[gray] pb-[2.1874vw] max-500:pb-[3.73vw]'>CAREERS</a>
            <a href="#" className='hover:text-[gray] max-500:pb-[14vw]'>NEWS</a>           
        </div>
        <div className='text-[1vw] max-850:text-[1.7958vw] pl-[9.7vw] flex flex-col max-850:hidden max-500:block  max-500:text-[3.19vw] max-500:pl-0'>
          <div className='max-500:pb-[3.73vw]'>
            <a href="#" className='tracking-[0.1757vw] hover:text-[gray] pb-[2.1874vw] '>CONTACT</a>
            </div>
            {/* <a href="#" className=' text-[25px] font-bold hover:text-[gray] max-1280:text-[15px]'>in</a>      */}
            <img src={linkedin} alt="LinkedIn Icon" className='h-[8.938vw] w-[0.938vw] max-500:h-[3.94vw]  
            max-500:w-[3.94vw]'/>
        </div>
        </div>
        <div className='flex justify-end max-w-[79.167vw] text-[0.625vw] tracking-[0.11vw] text-[gray] max-850:text-[1.46552vw] max-850:pr-[1.5vw] max-850:pb-[2.2vw] max-850:tracking-[0.25vw] 
        max-500:text-[2.66vw] max-500:flex-col max-500:tracking-[0.35vw] '>
            <a href="#" className='mr-[3.9474vw] hover:text-[#b4b1b1] transition duration-300
            max-500:pb-[3vw]'>LEGAL AND REGULATORY INFORMATION</a>
            <a href="" className='hover:text-[#b4b1b1] transition duration-300'>TERMS AND CONDITIONS</a>
        </div>
      </div>
    </div>
  )
}
