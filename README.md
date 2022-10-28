# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [Author](#author)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://omeshcoding.github.io/Time-Tracking-Dashboard/)

## Author

- Website - [Umesh Sharma](https://www.your-site.com)
- Frontend Mentor - [@Omeshcoding](https://www.frontendmentor.io/profile/Omeshcoding)
- Twitter - [@Omesh_Sharma](https://twitter.com/Omesha_Sh)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot/Desktop%20Time-Tracking-Dashboard.png)
![](./screenshot/Mobile%20Time-Tracking-Dashboard.png)

## My process

-HTML

1. I set up the Html sections of the project .

- CSS

2. Now while coding CSS I had to build 7 components so I start with 1 main component and as other six componets are the same I created one of those. After competing one it was easier to make other 5 as they had the same styling.
3. then I build desKtop first using grid ,
   after completing it I switched the destop first to mobile, this approach helped me to write less code.
4. I built the mobile reposniveness using Flex-box;

- javaScript

5. I fetched the data from the json file using the fetch method inside async function.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. How to use grid area to make the layout of the dashboard.
2. How to position an image at any position of the container using background-position.
3. How to get data from a local JSON object, method like fetch and how to use async functions check for errors if any.
   To see how you can add code snippets, see below:

```html
<div class="icon">
  <h2 class="option-icon">Work</h2>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'a  b c d'
    'a  e f g';
}
.icon .option-icon {
  background-image: url(./images/icon-ellipsis.svg);
  background-repeat: no-repeat;
  color: none;
  background-position: top 0.5rem right 10%;
}
```

```js
async function getTime() {
  const response = await fetch('./data.json');
  const dataArray = await response.json();
  return dataArray;
}
```

### Continued development

I would to focus on the css grid and it's properties as it has many in future more as it can make good layouts.
I would focus on async function and dealing more with JSON objects using api's.

### Useful resources

- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Acknowledgments

- Frontend Mentor - [@4002-Nonye](https://www.frontendmentor.io/profile/4002-Nonye)
  His javaScript code gave me an idea of how to fetch data from local Json object.
