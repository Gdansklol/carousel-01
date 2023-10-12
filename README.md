## Getting start react app and create Carousel component in React 2023

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




### `lear more` 

link : (https://www.youtube.com/watch?v=CMg_1KxpM_4)
