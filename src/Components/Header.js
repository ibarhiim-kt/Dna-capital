import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.svg"


export default function Header({isModalOpen,modalFunction}) {
    
  return (
    // <div className='sticky top-0'>    
    // <div className='flex justify-between pl-[157px] pr-[110px] pt-[75px] pb-[40px] items-center max-1527:pl-[115px] max-1180:pl-[90px] max-1180:pr-[80px] 
    // max-929:pr-[53px] max-929:pl-[53px] max-470:px-[30px] max-367:px-[30px]'>      
    //     <div className='flex cursor-pointer logoGroup items-center mainpart'>
    //     <img src={logo} alt="logo" className='max-1180:h-[25px] max-800:h-[30px] 
    //     max-367:h-[20px]'/>
    //     <div className='flex flex-col items-center ml-[-30px] max-1180:ml-[-12px] 
    //     '>
    //     <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[3px]
    //      max-1180:mb-[2px] part'></div>
    //     <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[3px] max-1180:mb-[2px] part'></div>
    //     <div className='w-[18px] h-[3px] rounded-t-[10px] bg-[white] border border-[white] mb-[3px] max-1180:mb-[2px] max-1180:h-[2px] max-1180:w-[15px]  part' 
    //     ></div>
    //     <div className='w-[28px] h-[3px] rounded-l-[100px] rounded-r-[100px] bg-[white] border border-[white] mb-[3px] max-1180:mb-[2px] max-1180:h-[2px] max-1180:w-[23px] part'></div>
    //     <div className='w-[18px] h-[3px] rounded-b-[10px] bg-[white] border border-[white] mb-[3px] max-1180:mb-[2px] max-1180:h-[2px] max-1180:w-[15px] part'></div>
    //     <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[3px] max-1180:mb-[2px] part'></div>
    //     <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] part'></div>
    //   </div>
    //   </div>
    //   <div className='group flex items-center cursor-pointer' onClick={modalFunction}>
    //     <h4 className='text-[12.5988px] tracking-[0.4em] mr-[25px] 
    //     group-hover:mr-[40px] transform duration-1000 group-hover:opacity-[0.2] text-[#FFFFFF] font-graphik font-normal max-1180:text-[9.5988px] max-1180:mr-[17px] max-1180:hover:mr-[27px] max-800:text-[12.5988px] max-800:mr-[20px] max-367:text-[9.5988px] max-367:mr-[17px]'>{isModalOpen?'CLOSE':'MENU'}</h4>
    //     <div className='relative'>  
    //     <div className=' relative h-[30px] w-[30px] flex items-center justify-center transition-all duration-700'> 
    //     <div className='border h-[31px] w-[31px] transform rotate-45 absolute group-hover:h-[57px] border-[#FFFFFF] group-hover:w-[57px] group-hover:opacity-[0.2] transition-all duration-700 max-1180:h-[25px] max-1180:w-[25px]'></div>
    //     <div className='border h-[31px] w-[31px] absolute group-hover:h-[5px] group-hover:w-[5px] group-hover:bg-[white] flex justify-center items-start rotate-45 transition-all duration-700 opacity-0  group-hover:opacity-[1]  max-1180:h-[25px] max-1180:w-[25px]  '>            
    <div className='fixed w-[100%] top-0'>    
    {/* h-800:pl-[140px] h-800:pr-[95px] h-700:pl-[130px] h-700:pr-[90px] 
    h-650:pl-[115px] h-650:pr-[75px] h-600:pl-[103px] h-600:pr-[70px] */}
    <div className='flex justify-between pl-[158px] pr-[107px] pt-[75px] pb-[40px] items-center max-1440:pl-[117px] max-1440:pr-[80px] max-1280:pl-[105px] max-1280:pt-[72px] max-1280:pr-[67px] max-1024:pl-[85px] max-1024:pr-[50px] 
    max-845:max-w-[742.72px]  max-845:mx-auto max-845:pr-[10px] max-845:pl-[20px]
     max-845:pt-[58px] max-647:max-w-[569.65px] max-647:pl-[15px] max-647:pr-[8px] 
     max-524:max-w-[461.42px] max-524:pl-[10px] max-524:pr-[2px] max-524:pt-[55px] 
     max-411:px-[35px] max-411:pt-[32px] max-380:px-[30px]'>  
    {/* className='h-800:h-[35px] h-700:h-[33px] h-650:h-[29px] h-600:h-[27px]'*/}
        <div className='flex cursor-pointer logoGroup items-center mainpart'>
        <img src={logo} alt="logo" className='max-1440:h-[29.27px] max-1280:h-[26.02px] 
        max-1024:h-[20.7px] max-845:h-[31px] max-647:h-[23.61px] max-524:h-[19.11px] 
        max-411:h-[27.28px] max-380:h-[23.5px]'/>
        <div className='flex flex-col items-center ml-[-30px] max-1440:ml-[-18px]
         max-1280:ml-[-15px] max-1024:ml-[-11px] max-845:ml-[-22px] max-647:ml-[-16px]
         max-524:ml-[-11px] max-411:ml-[-20px] max-380:ml-[-15px]'>
          {/* h-800:ml-[-25px] h-650:ml-[-22px] h-600:ml-[-21px] */}
        <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[3px] max-1440:border-l-[2px] max-1440:border-r-[2px] max-1440:mb-[2px]
         max-1280:mb-[2px] part'></div>
        <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[3px] max-1440:border-l-[2px] max-1440:border-r-[2px] max-1440:mb-[2px] max-1280:mb-[2px] part'></div>
        <div className='w-[18px] h-[3px] rounded-t-[10px] bg-[white] border border-[white] mb-[3px] max-1280:mb-[2px] max-1440:w-[14px] max-1440:h-[2px] max-1440:mb-[2px] max-1280:h-[2px] max-1280:w-[14px] part' 
         ></div>
        <div className='w-[28px] h-[3px] rounded-l-[100px] rounded-r-[100px] bg-[white] border border-[white] mb-[3px] max-1280:mb-[2px] max-1440:w-[20px] max-1440:h-[2px] max-1440:mb-[2px] max-1280:h-[2px] max-1280:w-[20px] part'></div>
        <div className='w-[18px] h-[3px] rounded-b-[10px] bg-[white] border border-[white] mb-[3px] max-1440:w-[14px] max-1440:h-[2px] max-1440:mb-[2px] max-1280:mb-[2px] max-1280:h-[2px] max-1280:w-[14px] part'></div>
        <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[white] mb-[3px] max-1180:mb-[2px] max-1440:border-l-[2px] max-1440:border-r-[2px] max-1440:mb-[2px] part'></div>
        <div className='w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-t-[white] mb-[2px] max-1440:border-l-[2px] max-1440:border-r-[2px] part'></div>
      </div>
      </div>
      <div className='group flex items-center cursor-pointer' onClick={modalFunction}>
      {/* h-800:mr-[24px] h-800:text-[11px] h-700:text-[10px] h-700:mr-[23px] h-650:text-[9px] h-650:mr-[22px] h-600:text-[8px] h-600:mr-[21px] */}
        <h4 className='text-[12.5988px] tracking-[0.45em] mr-[25px] 
        group-hover:mr-[40px] transform duration-1000 group-hover:opacity-[0.2] text-[#FFFFFF] font-graphik font-normal max-1440:text-[9px] max-1440:mr-[17px] max-1280:tracking-[0.6em] max-1280:text-[8px] max-1280:mr-[13px] 
        max-1024:text-[7.04px] max-1024:mr-[10px] max-845:text-[13.6165px] max-845:tracking-[0.45em] max-845:mr-[14px] max-647:text-[9.3px] max-524:text-[8.4431px] max-524:mr-[7px] max-411:text-[12.06px] max-411:mr-[10px] max-380:text-[10px]'>{isModalOpen?'CLOSE':'MENU'}</h4>
        <div className='relative'>
        <div className=' relative h-[30px] w-[30px] flex items-center justify-center transition-all duration-700'> 
        <div className='border h-[31px] w-[31px] transform rotate-45 absolute group-hover:h-[57px] border-[#FFFFFF] group-hover:w-[57px] group-hover:opacity-[0.2] transition-all duration-700 max-1440:h-[23px] max-1440:w-[23px] max-1280:h-[20.5px] max-1280:w-[20.5px] max-1280:group-hover:h-[40px] max-1280:group-hover:w-[40px] max-1024:w-[16.6px] max-1024:h-[16.6px] max-845:w-[25px] max-845:h-[25px] 
        max-647:w-[19px] max-647:h-[19px] max-411:h-[22px] max-411:w-[22px]'></div>
        {/* h-800:h-[29px] h-800:w-[29px] group-hover:h-800:h-[54px] group-hover:h-800:w-[54px] h-700:h-[27px] h-700:w-[27px] h-650:h-[25px] h-650:w-[25px] group-hover:h-650:h-[52px] group-hover:h-650:w-[52px] */}
        <div className='border h-[31px] w-[31px] absolute group-hover:h-[5px] group-hover:w-[5px] group-hover:bg-[white] flex justify-center items-start rotate-45 transition-all duration-700 opacity-0 group-hover:opacity-[1]      max-1440:h-[23px] max-1440:w-[23px] max-1280:h-[20.5px] max-1280:w-[20.5px] max-1280:group-hover:h-[4px] max-1280:group-hover:w-[4px] max-1024:w-[16.6px] max-1024:h-[16.6px] max-845:w-[25px] max-845:h-[25px] max-647:w-[19px] max-647:h-[19px]'> 
        {/* h-800:h-[28px] h-800:w-[28px] group-hover:h-800:h-[4px] group-hover:h-800:w-[4px] h-700:h-[27px] h-700:w-[27px] h-650:h-[25px] h-650:w-[25px] */}
        </div>        
        </div>
        </div>        
      </div>     
    </div>
    </div>
  )
}
