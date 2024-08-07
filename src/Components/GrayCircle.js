import React from 'react';
import {useState , useEffect} from 'react';

const GrayCircle = () => {    
  const [radius1900, setRadius1900] = useState(window.innerWidth * 0.0956);
    const [radius1280, setRadius1280] = useState(window.innerWidth * 0.099);
    const [radius850, setRadius850] = useState(window.innerWidth * 0.21);
    const [radius500, setRadius500] = useState(window.innerWidth * 0.24);
    useEffect(() => {
        const handleResize = () => {
          setRadius1900(window.innerWidth * 0.0956);
          setRadius1280(window.innerWidth * 0.099);
          setRadius850(window.innerWidth * 0.21);
          setRadius500(window.innerWidth * 0.24);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
        window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return(                      
        <svg height="18.6vw" width="19.31vw" class=" max-1280:h-[19.2vw] max-1280:w-[20.2vw] max-1440:h-[267px] max-1440:w-[290px] max-1024:h-[195px] max-1024:w-[220px] max-850:h-[43.1vw] max-850:w-[43.1vw] max-500:h-[52vw] max-500:w-[52vw]">
        <defs>
        <linearGradient id="grayStroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(47, 46, 46)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'lightgray', stopOpacity: 1 }} />
        </linearGradient>
        </defs>
        <circle r={radius1900} cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="4" fill="none" className='max-850:hidden'/>   
        {/* <circle r="138" cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" className='hidden max-1440:block max-1280:hidden'/>    
        <circle r={radius1280} cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" className='hidden max-1280:block max-850:hidden'/>  
        <circle r="100" cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" className='hidden max-1024:block max-845:hidden'/>  */}
        <circle r={radius850} cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" className='hidden max-850:block max-500:hidden'/>
        <circle r={radius500} cx="50%" cy="50%" stroke="url(#grayStroke)" stroke-width="3" fill="none" className='hidden max-500:block'/>
        </svg>     
    );    
}
export default GrayCircle;
