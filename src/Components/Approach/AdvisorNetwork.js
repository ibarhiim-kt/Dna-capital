import React from 'react'
import flowChart from './assets/flowChart.png'

export default function AdvisorNetwork() {
  return (
    <div className='relative overflow-hidden'>
    <img src={flowChart} alt="Flow ChartS" className='absolute  bg-transparent scale-[1.12] w-full h-full' /> 
    <div className="max-w-[1630px] mx-auto text-[white] flex flex-col items-center mt-[29.37rem] relative max-1950:mt-[25vw] max-500:mt-[62.4vw]">          
    <h2 className='text-[25px] font-graphikExtralight mb-[43.75px] tracking-[0.23em] max-1950:text-[1.25vw] max-1950:mb-[2.1876vw] max-1950:tracking-[0.2vw] max-850:text-[2.2vw] max-850:mb-[5.1vw] max-850:tracking-[0.4vw] max-500:text-[4.393vw] max-500:tracking-[0.8vw]'>ADVISOR NETWORK</h2>
    <p className="text-[25px] font-graphikLight max-w-[688px] text-center mb-[308.75px] max-1950:text-[1.25vw] max-1950:mb-[15.45vw] max-1950:max-w-[34vw] max-850:text-[2.2vw] max-850:max-w-[71vw] max-500:text-[4.393vw] max-500:max-w-[88vw] max-500:mb-[36.469vw] ">Our network of specialist advisors provides deep expertise and valuable contributions to all verticals.</p>
    <h2 className='text-[25px] font-graphik mb-[43.75px] tracking-[0.23em] max-1950:text-[1.25vw] max-1950:mb-[2.1876vw] 
    max-1950:tracking-[0.2vw] max-850:text-[2.2vw] max-850:mb-[5.1vw] max-850:tracking-[0.4vw] max-500:text-[4.393vw]'>VERTICALS</h2>
      
    <div className="flex gap-3 font-graphikExralight text-[25px] mb-[308.75px] max-1950:text-[1.25vw] max-1950:mb-[15.45vw] max-850:text-[2.2vw] max-850:items-center max-850:flex-col max-850:mb-[20.1vw] max-500:text-[4.393vw] max-500:mb-[40vw] max-850:tracking-[0.2vw]">
        <div className='flex items-center justify center gap-3 '>
        <div className='w-[299.96px] h-[362.5px] bg-[rgba(25,24,32,.8)] flex items-center justify-center rounded-[0.9375rem] 
        max-1950:w-[16.584vw] max-1950:h-[18.12vw] max-850:w-[21.414vw] max-850:h-[24.2vw] max-500:w-[38.87vw] max-500:h-[43.95vw]'>Early-Stage</div>
        <div className='w-[299.96px] h-[362.5px] bg-[rgba(25,24,32,.8)] flex items-center justify-center rounded-[0.9375rem] 
        max-1950:w-[16.584vw] max-1950:h-[18.12vw] max-850:w-[21.414vw] max-850:h-[24.2vw] max-500:w-[38.87vw] max-500:h-[43.95vw]'>Growth</div>
        </div>
        <div className='w-[299.96px] h-[362.5px] bg-[rgba(25,24,32,.8)] flex items-center justify-center rounded-[0.9375rem] 
        max-1950:w-[16.584vw] max-1950:h-[18.12vw] max-850:w-[21.414vw] max-850:h-[24.2vw] max-500:w-[38.87vw] max-500:h-[43.95vw] '>Late-Stage</div>
    </div>
    <h2 className='text-[25px] font-graphik mb-[43.75px] tracking-[0.23em] max-1950:text-[1.25vw] max-1950:mb-[2.1876vw] 
    max-1950:tracking-[0.2vw] max-850:text-[2.2vw] max-850:mb-[5.1vw] max-850:tracking-[0.4vw] max-500:text-[4.393vw]'>COMPANIES</h2>
    <p className="text-[25px] font-graphikExtralight max-w-[500px] text-center mb-[308.75px] max-1950:mb-[15.43vw] max-1950:text-[1.25vw] max-1950:max-w-[25vw] max-850:text-[2.2vw] max-850:max-w-[70vw] max-500:text-[4.393vw] max-500:max-w-[82vw]">Global portfolio of healthcare companies, across multiple development stages.</p>
    </div>
    </div>
  )
}
