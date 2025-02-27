"use strict";

let calculateButton = document.querySelector(".calculate-button");
let mortgageAmountInput = document.querySelector("#mortgage-amount-input");
let mortgageTermInput = document.querySelector("#mortgage-term-input");
let interestRateInput = document.querySelector("#interest-rate-input");
let repaymentOption = document.querySelector("#repayment-option");
let interestOnlyOption = document.querySelector("#interest-only-option");
let clearButton = document.querySelector(".clear-button");
let errorMessages = document.querySelectorAll(".error-msg");
let labelAmount = document.querySelectorAll(".label-amount");
let resultHeader = document.querySelector(".results-header");
let resultDetails = document.querySelector(".results-details");

function showError(index, msg) {
  errorMessages[index].textContent = msg;
}

function clearErrors() {
  errorMessages.forEach((el) => (el.textContent = ""));
}

function validateInput(input, index) {
  if (!input) {
    showError(index, "This field is required");
    return null;
  }
  return parseFloat(input);
}

function getSelectedOption() {
  if (repaymentOption.checked) return "repayment";
  if (interestOnlyOption.checked) return "interestOnly";
  showError(3, "This field is required");
  return null;
}

function formatNumber(number) {
  return new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  }).format(number);
}

function calculateRepayment() {
  clearErrors();
  
  let mortgageAmount = validateInput(mortgageAmountInput.value, 0);
  let mortgageTerm = validateInput(mortgageTermInput.value, 1);
  let interestRate = validateInput(interestRateInput.value, 2);
  let mortgageType = getSelectedOption();

  if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) return;

  let monthlyInterest = interestRate / 100 / 12;
  let totalMonths = mortgageTerm * 12;
  let monthlyPayment, totalRepayment;

  if (mortgageType === "repayment") {
    let factor = Math.pow(1 + monthlyInterest, totalMonths);
    monthlyPayment = (mortgageAmount * monthlyInterest * factor) / (factor - 1);
    totalRepayment = monthlyPayment * totalMonths;
  } else {
    monthlyPayment = mortgageAmount * monthlyInterest;
    totalRepayment = monthlyPayment * totalMonths;
  }

  resultHeader.classList.add("hide");
  resultDetails.classList.add("show");
  labelAmount[0].textContent = formatNumber(monthlyPayment);
  labelAmount[1].textContent = formatNumber(totalRepayment);
}

function handleClear() {
  document.querySelector("form").reset();
  clearErrors();
  resultHeader.classList.remove("hide");
  resultDetails.classList.remove("show");
  labelAmount[0].textContent = labelAmount[1].textContent = "";
}

clearButton.addEventListener("click", handleClear);
calculateButton.addEventListener("click", function (e) {
  e.preventDefault();
  calculateRepayment();
});
