// raf or rfc or rfce for generate a template component 

import React,{useState} from 'react';
import { CarouselItem } from './CarouselItem';

export const  Carousel =() => {
    const [activeIndex, setActivIndex] = useState(0);

    const items = [
        {   title: "Meny 1",
            description:"Matiga våfflor : Meny-1. Svensson Special - 145 kronor. Chèvrekräm med färsk timjan och vitlök, serranoskinka,kanderade valnötter med flingsalt, ruccola och acaciahonung",
            icon:  require("./Media/ex1.svg")
        },
        {   title: "Meny 2",
            description:"Skagenröra á la Tore Wretman (innehåller inga mejeriprodukter), serveras med ärtskott och citron.",
            icon:  require("./Media/ex2.svg")
        },
        {   title: "Meny 3",
            description:"Rökt lax, citron- och pepparrotskräm, tångrom, gräslök och citron.",
            icon:  require("./Media/ex3.svg")
        }
    ]
  return (
    <div className='carousel'>
        <div className='inner'
        style={{transform: `translate:(-${activeIndex * 100})`}}
        >
        {items.map((item)=>{
            return   <CarouselItem item={item}/>;
        })}
        </div>
        
        <div className='carousel-buttons'>
            <button className='button-arrow'>
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
              </button>
            <div className='indicators'> 
            <button className='indicator-buttons'>
                {" "}
            <span class="material-symbols-outlined">radio_button_checked   </span>
              
               </button>
            
         
            </div>
            <button className='button-arrow'>
            <span class="material-symbols-outlined">
            arrow_forward_ios
            </span>
            </button>
        </div>
    </div>
  )
}
