# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

---

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase and decrease product quantities directly from the product card
- View the current cart total in real time
- See an order confirmation modal after confirming the order
- Reset the cart and start a new order
- View the optimal layout depending on the device screen size
- See hover and focus states for all interactive elements

---

### Screenshot

![](./preview.jpg)

---

### Links

- Live Site URL: https://your-live-site-url.com

---

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- React
- Vite

---

### What I learned

This project helped me strengthen my understanding of **state management and component communication in React**.

Some key takeaways:

- Lifting state up to manage the cart globally
- Conditionally rendering UI based on application state
- Managing quantities with immutable state updates
- Building reusable components with clear responsibilities
- Handling responsive layouts and scroll behavior in modals

Example of updating cart state immutably:

```js
setCartItems((prevItems) =>
  prevItems
    .map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + delta } : item,
    )
    .filter((item) => item.quantity > 0),
);
```
