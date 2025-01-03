# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I followed the mobile-first workflow for this project, I structured the html file like this: 
```html
<main>
  <div class="form-container">
    <form>
      <h1>Contact Us</h1>
      <div class="text-input"></div>
      <div class="query-inputs"></div>
      <div class="message-input"></div>
      <div class="consent"></div>
      <button></button>
    </form>
  </div>
</main>
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I faced some difficulties when trying to substitute the default radio and checkbox buttons with the custom svg buttons, so after looking up some online resources and with the help of chatGPT, I finally figured it out:
```html
<div id="radio-buttons" class="radio-buttons">

  <div class="radio-button" id="radio-button">
      <input type="radio" id="radio-btn1" name="radio-btn1">
      <label for="radio-btn1">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" 
          height="21" fill="none" viewBox="0 0 20 21"><path fill="#0C7D69" 
          d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 
          9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 
          8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 
          5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"/><svg>
            General Equity
      </label>
  </div>

  <div class="radio-button" id="radio-button">
      <input type="radio" id="radio-btn2" name="radio-btn1">
      <label for="radio-btn2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" 
            height="21" fill="none" viewBox="0 0 20 21"><path fill="#0C7D69" 
            d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 
            9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 
            8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 
            5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"/><svg>
              Support Request
        </label>
  </div>
</div>     
```
```css
.radio-button input[type="radio"] {
  display: none;
}

.radio-button label svg {
  display: inline-block !important;
  margin-right: .1rem;
}

.radio-button label svg path {
  fill: transparent;
  stroke: var(--Grey-900);
  stroke-width: 1;
}

.radio-buttons input[type="radio"]:checked + label svg path {
  fill: var(--Green-600);
  stroke: var(--Green-600);
}

.radio-button:hover {
  border-color: var(--Green-600);
  cursor: pointer;
}

.radio-button:hover label svg path {
  stroke: var(--Green-600);
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
