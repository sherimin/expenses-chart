# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

<img width="1451" alt="Screenshot 2024-10-01 at 8 17 34 PM" src="https://github.com/user-attachments/assets/09afd8aa-c162-4096-8206-efdd938f3b6a">

### Links

- Solution URL: [GitHub Repo](https://github.com/sherimin/expenses-chart/edit/main/README.md)
- Live Site URL: [Live Site](https://expenses-chart-theta.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS ](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/)

### What I learned

In this project, I refreshed my knowledge of TailwindCSS, and gained knowledge with Recharts. Customizing the chart's axes, labels, and handling the hover and active states for each bar took me much research and experimentation.

```Customization on chart axis
<XAxis dataKey="day" axisLine={false} tickLine={false} />
<YAxis axisLine={false} tick={false} />
```

### Continued development

I believe this project serves as an excellent foundation for larger projects focused on expense tracking, showcasing website flows, and customer metrics. Moving forward, I plan to integrate the knowledge gained from this project and integrate it into more extensive applications.

As for this project itself, I think it would be beneficial for it to allow users to adjust their balance at the beginning of each week. I plan to add an input box for this feature.

### Useful resources

- [My Favourite React Chart Library](https://www.youtube.com/watch?v=nSsTDx9rgwk) - This is a tutorial video showcasing how to customize charts with Recharts for better use interactivity and responsiveness.
- [TailwindCSS](https://tailwindcss.com/docs/installation) - TailwindCSS provides great resources on how to set up and config the project. 

## Author

- Portfolio Website - [Sheri Lu](https://www.sherilu.com/)
- Frontend Mentor - [@sherimin](https://www.frontendmentor.io/profile/sherimin)
