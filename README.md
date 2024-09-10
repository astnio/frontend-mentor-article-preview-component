# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned more about using clip-mask in CSS. I don't use it very much, and found this was a good chance to use it.

### Continued development

This challenge was difficult in that I was not sure how to transition the share buttons from the mobile layout to a desktop layout. Once more, I have started from the mobile view, however I feel as though it would have been quite a challenge going from either layout to another.

It was a challenge because it is hard to decide how to manage the pop-up. Starting in either view is easy, as you simply base it off the parent that it may be nested under, but the location changes completely once in the other view. One solution I was thinking of was to simply have two of these, and just disable one when the layout changes. Having two of those to update seemed counter-productive, though, so I tried to keep it to juse a single one.

I was also considering using JavaScript to move the element around, as to base it on another parent per layout. That probably would have worked, but seemed overkill for this simpler project.

What I ended up doing was giving the element an absolute position, and just manually tweaking the location until it was centered where I wanted it to be. This solution does not feel great to me, as any layout change will end up messing it up, however the card has a set with at the desktop, and the mobile view is fine because it is contained within its parent anyway.

I cannot say I am really proud of the solution I came up with, but I felt as though it was the simplest to implement without going overkill on JavaScript or creating duplicate elements.

## Author

- Website - [Austin Hagel](https://austinh.io)
- Frontend Mentor - [@austinh-io](https://www.frontendmentor.io/profile/austinh-io)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
