import React from 'react'

export default function Graph() {
  return (
    <div className="max-w-[1630px] mb-[290px] mx-auto text-white mt-[425px] max-1950:mt-[22vw] max-1950:mb-[14vw] max-1950:max-w-none max-850:max-w-[88vw] max-850:mb-[11vw] max-850:mt-[35vw] max-500:max-w-none max-500:mt-[64vw] max-500:mb-[20vw]">
      <div className='pl-[65px] max-1950:pl-[12.6vw] max-850:pl-[7.1vw] max-500:pl-[8.7vw]'>
        <ul className='flex text-[16.25px] font-graphikLight ml-[3.9rem] tracking-[0.21em] font-bold max-1950:text-[0.8483vw] max-1950:ml-[3.35vw] max-1950:tracking-[0.15vw] max-850:text-[1.613vw] max-850:tracking-[0.33vw] max-850:ml-0 max-500:text-[2.934vw] max-500:tracking-[0.6vw]'>
          <li className='mr-[1.5rem] w-[631.25px] pb-[34px] mb-[18.75px] border-b border-b-[hsla(0,0%,100%,.1)] max-1950:mr-[1.5vw] max-1950:w-[31.562vw] max-1950:pb-[1.812vw] max-1950:mb-[0.937vw] max-850:w-[34.47vw] max-500:w-[37.67vw] max-500:mb-[2.937vw] max-500:mr-[2.5vw]'>VENTURE CAPITAL</li>
          <li className='ml-[1.5rem] w-[631.25px] pb-[34px] mb-[18.75px] border-b border-b-[hsla(0,0%,100%,.1)] max-1950:mr-[1.5vw] max-1950:w-[31.562vw] max-1950:pb-[1.812vw] max-1950:mb-[0.937vw] max-850:w-[34.47vw] max-500:w-[37.67vw] max-500:mb-[2.937vw]'>PRIVATE EQUITY</li>
        </ul>
        <div className='w-[1500px] h-[750px] border border-[hsla(0,0%,100%,.2)] border-t-0 border-r-0 relative max-1950:w-[75vw] max-1950:h-[37.46vw] max-850:w-[73.24vw] max-850:h-[55.64vw] max-500:w-[83.18vw] max-500:h-[74.505vw]'>
          <div className='curve max-850:hidden'></div>
          <ul className="flex text-[15px] text-center font-graphikLight absolute bottom-[1.25rem] left-0 w-full tracking-[0.21em] font-semibold max-1950:text-[0.75vw] max-1950:tracking-[0.15vw] max-1950:bottom-[1vw] max-850:text-[1.76vw] max-850:tracking-[0.3vw] max-500:text-[3.2vw] max-500:tracking-[0.6vw] max-500:bottom-[3vw]">
            <li className="w-[25%] max-850:w-[50%]">SEED</li>
            <li className="w-[25%] max-850:hidden">EARLY STAGE</li>
            <li className="w-[25%] max-850:hidden">GROWTH</li>
            <li className="w-[25%] max-850:w-[50%]">LATE STAGE</li> 
          </ul>
        </div>
        <div className="relative text-[16.25px] tracking-[0.21em] font-bold max-1950:text-[0.8483vw] max-1950:tracking-[0.15vw] max-850:text-[1.613vw] max-850:tracking-[0.2vw] max-500:text-[2.934vw] max-500:tracking-[0.4vw]">
          <h3 className="absolute top-0 left-[-4.8rem] origin-top-left rotate-[-90deg] max-1950:left-[-4vw] max-850:left-[-3.5vw] 
          max-500:left-[-6.5vw]">COMPANY SIZE</h3>
          <h3 className="pt-[53px] max-1950:pt-[2.719vw] max-850:pt-[1.719vw] max-500:pt-[2.719vw]">DEVELOPMENT STAGE</h3>
        </div>
      </div>
    </div>
  )
}
