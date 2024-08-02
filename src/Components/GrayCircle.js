import React from 'react';
const GrayCircle = () => {    
    
    return(                      
        <svg height="350" width="380" class=" max-1280:h-[231px] max-1280:w-[250px]">
        <defs>
        <linearGradient id="grayStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(47, 46, 46)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'lightgray', stopOpacity: 1 }} />
        </linearGradient>
        </defs>
        <circle r="180" cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="4" fill="none" 
        className='max-1280:hidden'/>       
         <circle r="120" cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" 
         className='hidden max-1280:block'/>  
        </svg>      
    );    
}
export default GrayCircle;
