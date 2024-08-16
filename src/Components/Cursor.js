import React, { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (event) => {
        
          setPosition({
            x: event.pageX,  
            y: event.pageY, 
          });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <div className='absolute' style={{
        top: 0,
        left: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}>
        <div className=' relative h-[1.619vw] w-[1.619vw] flex items-center justify-center transition-all duration-700'> 
        <div className='border h-[1.619vw] w-[1.619vw] transform rotate-45 absolute group-hover:h-[3.2vw] border-[#FFFFFF] group-hover:w-[3.2vw] group-hover:opacity-[0.2] transition-all duration-700 
        max-850:h-[2.94vw] max-850:w-[2.94vw] max-850:group-hover:w-[4vw] max-850:group-hover:h-[4vw] 
        max-500:w-[5vw] max-500:h-[5vw] max-500:group-hover:w-[7vw] max-500:group-hover:h-[7vw]'>
        </div>        
        <div className='border h-[1.619vw] w-[1.619vw] absolute group-hover:h-[0.28vw] group-hover:w-[0.28vw] group-hover:bg-[white] flex justify-center items-start rotate-45 transition-all duration-700 opacity-0 group-hover:opacity-[1] max-850:h-[2.94vw] max-850:w-[2.94vw] max-850:group-hover:w-[0.31vw] max-850:group-hover:h-[0.31vw] max-500:w-[5vw] max-500:h-[5vw] max-500:group-hover:w-[0.35vw] max-500:group-hover:h-[0.35vw]'>        
        </div>        
        </div>
    </div>  
  )
}
