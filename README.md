# Frontend Mentor - Mortgage repayment-optioncalculator solution

This is a solution to the [Mortgage repayment-optioncalculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Input mortgage information and see monthly-repaymentrepayment-optionand total-repaymentrepayment-optionamounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/mortgage-repayment-calculator-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/mortgage-repayment-calculator-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Proper Use of Event Listeners:

Understanding when and how to use event listeners efficiently to handle user interactions.
Error Handling:

Implementing error handling to manage and respond to user input errors gracefully.
Function Utilization:

Writing modular functions to keep the code organized and reusable.
Adhering to the DRY (Don't Repeat Yourself) principle to minimize redundancy.
Code Readability:

Ensuring that my code is clean and easy to understand by using clear and descriptive variable names.
Structuring code in a way that is logical and easy to follow.

```js
function calculateRepayment() {
  const mortgageAmount = validInput(mortgageAmountInput.value, 0);
  const mortgageTerm = validInput(mortgageTermInput.value, 1);
  const mortgageInterest = validInput(interestRateInput.value, 2);
  const isRadioButtonChecked = checkRadioButton();

  if (mortgageAmount && mortgageTerm && mortgageInterest) {
    if (isRadioButtonChecked === "repayment") {
      //Convert annual Interest Rate to monthly interest
      const monthlyInterest = mortgageInterest / 100 / 12;
      //Calculate number of payment
      const numberOfPayment = mortgageTerm * 12;
      //Calculate (1+r)n
      const onePlusPowerN = Math.pow(1 + monthlyInterest, numberOfPayment);
      //Calculate Monthly Mortgage payment
      const monthly =
        (mortgageAmount * (monthlyInterest * onePlusPowerN)) /
        (onePlusPowerN - 1);
      //Calculate Total repayment
      const totalRepayment = monthly * numberOfPayment;
      //Round it to two decimal and format Into Currency
      const monthlyRepayment = formatNumber(monthly);
      const totalRepaymentRounded = formatNumber(totalRepayment);

      resultHeader.classList.add("hide");
      resultDetails.classList.add("show");
      labelAmount[0].textContent = monthlyRepayment;
      labelAmount[1].textContent = totalRepaymentRounded;
    } else if (isRadioButtonChecked === "interestOnly") {
      //Convert annual Interest Rate to monthly interest
      const monthlyInterest = mortgageInterest / 100 / 12;
      //Calculate monthly Interest payment
      const monthlyInterestPayment = mortgageAmount * monthlyInterest;
      //Total Interest Payment overLoan Term
      const totalInterest = monthlyInterestPayment * mortgageTerm * 12;
      //Round it to two decimal and format Into Currency
      const interestPayment = formatNumber(monthlyInterestPayment);
      const interestPaidOverTerm = formatNumber(totalInterest);

      resultHeader.classList.add("hide");
      resultDetails.classList.add("show");
      labelAmount[0].textContent = interestPayment;
      labelAmount[1].textContent = interestPaidOverTerm;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Improving Logic and Problem-Solving:

Developing more efficient and optimized algorithms.
Tackling increasingly complex programming challenges to sharpen my logical thinking.
Mastering Semantic HTML:

Ensuring my code is clean, readable, and accessible.
Using appropriate tags and attributes to improve SEO and accessibility.
Advancing CSS Layout Techniques:

Gaining a deeper understanding of CSS Flexbox and Grid layouts.
Creating responsive and visually appealing designs.
Deepening JavaScript Knowledge:

Becoming more proficient with JavaScript ES6+ features.
Exploring advanced topics like asynchronous programming, closures, and module patterns.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
