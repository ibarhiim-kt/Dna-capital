import React from 'react'
import joseGuinle from "./assets/joseGuinle.jpeg"
import luizFelipe from "./assets/luizFelipe.jpg"
import noronha from "./assets/noronha.jpg"
import mario from "./assets/mario.jpg"
import parthaMishra from "./assets/parthaMishra.jpeg"
import pedro from "./assets/pedro.jpg"
import thayan from "./assets/thayan.jpg"
import camila from "./assets/camila.jpeg"
import juliaPrado from "./assets/juliaPrado.jpg"
import lucas from "./assets/lucas.jpg"
import ricardoLima from "./assets/ricardoLima.jpg"



export default function TeamDetails() {

  const details=[
    {"image":joseGuinle,      
      "name":"José Eduardo Guinle",
      "order":"1"
    },
    {"image":luizFelipe,
      "name":"Luiz Felipe Costa",
      "order":"4"
    },
    {"image":noronha,
      "name":"Luiz Noronha",
      "order":"7"
      
    },
    {"image":mario,
      "name":"Mario Sergio Ribeiro",
      "order":"10"
    },
    {"image":parthaMishra,
      "name":"Partha Mishra",
      "order":"2"
    },
    {"image":pedro,
      "name":"Pedro Bueno",
      "order":"5"
    },
    {"image":thayan,
      "name":"JThayan Hartmann",
      "order":"8"
    },    
    {"image":camila,
      "name":"Camila Guimarães",
      "order":"11"
    },
    {"image":juliaPrado,
      "name":"Julia Prado",
      "order":"3"
    },
    {"image":lucas,
      "name":"Lucas Cortez",
      "order":"6"
    },
    {"image":ricardoLima,
      "name":"Ricardo Lima",
      "order":"9"
    },
  ]
  const detailsResponsive=[
    {"image":joseGuinle,      
      "name":"José Eduardo Guinle",
      "order":"1"
    },
    {"image":parthaMishra,
      "name":"Partha Mishra",
      "order":"2"
    },
    {"image":juliaPrado,
      "name":"Julia Prado",
      "order":"3"
    },
    {"image":luizFelipe,
      "name":"Luiz Felipe Costa",
      "order":"4"
    },
    {"image":pedro,
      "name":"Pedro Bueno",
      "order":"5"
    },
    {"image":lucas,
      "name":"Lucas Cortez",
      "order":"6"
    },
    {"image":noronha,
      "name":"Luiz Noronha",
      "order":"7"      
    },
    {"image":thayan,
      "name":"JThayan Hartmann",
      "order":"8"
    },  
    {"image":ricardoLima,
      "name":"Ricardo Lima",
      "order":"9"
    },  
    {"image":mario,
      "name":"Mario Sergio Ribeiro",
      "order":"10"
    },   
    {"image":camila,
      "name":"Camila Guimarães",
      "order":"11"
    },
    
  ]
  return (
    <div className='max-w-[1690px] mx-auto pl-[95px] mt-[100px] max-1950:mt-[5vw] max-1950:max-w-[83vw] max-1950:pl-[4vw] max-850:pl-[5vw] max-500:pl-0 max-500:mt-[8vw]'>
      <div className='grid grid-cols-4 gap-[27px] max-1950:gap-8 max-850:grid-cols-1 max-850:hidden'>
      {        
        details.map((map)=>(
      
        <a className= "pb-[70px] cursor-pointer max-1950:pb-[3vw] max-1950:w-[19vw] ">          
          <div className='overflow-hidden max-1950:h-[19.04vw] max-1950:w-[19vw] '>
          <img src={map.image} alt="hello" className='h-[380.83px] w-[380.83px] opacity-[0.8] hover:scale-110 transform transition-transform duration-[1.5s] max-1950:h-[19.04vw] max-1950:w-[19vw]'/>
          </div>  
        <p className='text-[27px] mt-[18px] tracking-[-0.8px] font-graphikExtralight max-1950:font-semibold text-[#616166] max-1950:text-[1.25vw] 
        max-1950:tracking-[-0.04vw] max-1950:mt-[0.95vw]'>{map.name}</p>
        </a>     
        ))
        
    }
    </div>
    <div className='max-850:grid-cols-1 hidden max-850:inline'>
      {        
        detailsResponsive.map((map)=>(      
        <a className= "pb-[3vw] cursor-pointer w-[73.34vw]">          
          <div className='overflow-hidden  h-[73.34vw] w-[73.34vw] max-500:h-[83.34vw] max-500:w-[83.34vw]'>
          <img src={map.image} alt="hello" className='h-[73.34vw] w-[73.34vw] opacity-[0.8] hover:scale-110 transform transition-transform duration-[1.5s] max-500:h-[83.34vw] max-500:w-[83.34vw]'/>
          </div>  
        <p className='text-[2.5vw] mt-[1.2vw] mb-[6.5vw] tracking-[-0.04vw] font-graphikExtralight font-semibold text-[#616166] 
        max-500:mt-[3.1vw] max-500:text-[4.3vw] max-500:mb-[9.5vw]'>{map.name}</p>
        </a>     
        ))
        
    }
    </div>
    </div>
  )
}
