import React from 'react'

export default function Modal() {
  return (
    // pt-[22.6vw]
    <div>
    <div className='absolute mt-[-13.5vw] top-[50%] mx-auto flex flex-col pl-[20.7vw] text-[#FFFFFF] max-h-[100vh] overflow-hidden max-850:pl-[8.1vw] max-850:w-[88vw] max-850:mt-[-24.5vw] max-500:mt-[-45.5vw]'>
    <div className='text-[4.687vw] font-darius leading-[6.3vw] flex flex-col max-850:text-[5.86vw] max-850:leading-[9.2vw] max-500:text-[10.65vw] max-500:leading-[17.2vw]'>
      <a>Our DNA</a>
      <a>Approach</a>
      <a>Team</a>
      <a>Companies</a>
      </div>
    <div className='mt-[5.35vw] text-[0.8125vw] max-850:text-[1.62vw] max-850:mt-[15vw] max-500:text-[2.928vw] 
    max-500:mt-[26vw]'>
        <p className='pb-[0.62vw] max-500:pb-[1.5vw]'>CAREERS</p>
        <p className='pb-[0.62vw] max-500:pb-[1.5vw]'>NEWS</p>
        <p >CONTACT</p>
    </div>
    
    </div>
    <div className='text-white flex items-center justify-end min-850:hidden absolute top-[97.8%] right-[0] 
    pr-[8.7vw] font-graphikExtralight font-semibold text-[1.75vw] max-500:text-[3.19vw] max-500:top-[95.5%] 
    max-500:pr-[11.5vw]'>
      <div className='pr-[2.3vw] tracking-[0.1vw] max-500:pr-[5vw]'>EN</div>
      <div className='tracking-[0.1vw]'>PT</div>
    </div>
    </div>
  )
}
