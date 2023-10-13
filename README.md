## Getting start react app and create Carousel component in React 2023



# <img src="![Skärmavbild 2023-10-13 kl  11 23 32](https://github.com/Gdansklol/carousel-01/assets/56717993/92f777d7-7aa9-4c9f-a98b-5b45edbc81bc)" width="300" height="300"/>

<!-- 
##  <img src="![jorggubWaffle](https://github.com/Gdansklol/carousel-01/assets/56717993/2c122770-0fca-4385-a7c5-b93db4654312)" width="200" height="200"/>

<!-- ![react1](https://github.com/Gdansklol/react-level-01/assets/56717993/a1c47e81-9bf9-411f-bd47-ac7197cc6977) -->
![jorggubWaffle](https://github.com/Gdansklol/carousel-01/assets/56717993/2c122770-0fca-4385-a7c5-b93db4654312) -->

 [Create React App]

 ```js
 npx create-react-app ./

 ```

 in order to generate template react app. 

and then test for it works.

npm start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### carousel Component in React

> Now we need to delete the code , so I am going to delete some files

also we need to delete some of the code that 
we won't need so first we're gonna 
clear the App.js clear the imports 
also clear the styles from
index.css


### src/ Carousel.jsx



### src / CarouselItem.jsx

## unDraw

link (https://undraw.co/)

click : Browse now 


download SVG for your project


##  create src/ Media folder 



### index.css 

```js


  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,900;1,200&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif
}

.App {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #cadced;
}

.carousel {
  overflow: hidden;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-img {
  width: 250px;
}


```

now ex1 ex2 ex3.svg shows with 
.carousel {
  overflow: hidden;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-img {
  width: 250px;
  
}


> why stil ex1.svg img is broken?

```js


  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,900;1,200&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif
}

.App {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #85a8c5;
}

.carousel {
  overflow: hidden;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-img {
  width: 250px;
  padding: 0 20px 0 20px;
}

```
how to fix it ?

- use white-space:nowrap 
for shows all svg img and texter of description 

```js

.inner {
  white-space: nowrap;
}

```

version 2 index.css

```js


  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,900;1,200&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif
}

.App {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #85a8c5;
}

.carousel {
  overflow: hidden;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inner {
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}


.carousel-img {
  width: 250px;
  padding: 0 20px 0 20px;
}

```

vesrion 3 index.css
show just one svg img with brocken descriptions text. 

```js

...


.inner {
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.carousel-item {
  display: inline-flex;
  align-items: center;
  justify-self: center;
  height: 490px;
  background-color: white;
}
.carousel-img {
  width: 250px;
  padding: 0 20px 0 20px;
}

```

version index.css 4 


## google fonts icons 

link ( https://fonts.google.com/icons?query=radio&selected=Material+Symbols+Outlined:radio_button_checked:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=radio)

1. copy link rel stylesheet of on of google fonts icons ex radio button icon 

2. paste in public/ index.html 
<link> here </link>

3. arrow_back_ios in google  fonts icons 

 ex. 
<span class="material-symbols-outlined">
arrow_back_ios
</span>

```js

 <div className='carousel-buttons'>
            <button>
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
              </button>
        <div className='indicators'> 
        <span class="material-symbols-outlined">
radio_button_checked
</span>
        </div>
            <button>arrow_right</button>
        </div>
    </div>

    ```

> Create a button and place a radio button icon inside the button.

```js

Carousel.jsx

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

```





### `lear more` 

link : (https://www.youtube.com/watch?v=CMg_1KxpM_4)

- the update index is going to take as a parameter the active index -1 


```js

Carousel.jsx

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
    ];

    const updateIndex = (newIndex)=> {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length){
            newIndex = items.length -1;
        }

        setActivIndex(newIndex);
    };


```

```js

<button 
            onClick={()=> {
                updateIndex(activeIndex -1);
            }}
            className='button-arrow'>
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
              </button>

    ```


- I want to pass inside the carousel item a props which is going to be
width of hundred percent 100%  and I amm going to put className in span because  this is react.

> before 

```js
 <span class="material-symbols-outlined">
             radio_button_checked   
 </span>

```

> and inside I am going to copy paste the material symbol outline  , 
material-symbols-outlined, 
and then I am going to put the conditioner because if it's the active index
I want to be basically if the index is equals the active index ,
(index === activeIndex ?)
I want to it change the style that we created that time that weäre creating the

index.css basically m so if it's reactive index then I want to be the
indicator symbol active class or else I donät want this 
I want it to be the other one which is just the simple indicator simple class.


> after

```js
 <span 
                    className={`material-symbols-outlined ${
                        index === activeIndex 
                            ?"indicator-symbol-active"
                            : "indicator-symbol"
                        }`}>
                        radio_button_checked   
</span>

```

- before reactiv index , indicator- symbol -active class or
else I do not want this , I want it to be other one which is just the simple
indicator simple class.

and let's see what's going on and it works. 

bigger screen nice . everything works.  



