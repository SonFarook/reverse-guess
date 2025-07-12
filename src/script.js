"use strict";

let currentGuess;
let isHigher;
let min = 1;
let max = 100;

// hide the start button and show all the other buttons
const toggleVisibility = function (toggle) {
  if (toggle === "show") {
    document.querySelector(".start").classList.add("collapse");
    document.querySelector(".higher").classList.add("visible");
    document.querySelector(".lower").classList.add("visible");
    document.querySelector(".right").classList.add("visible");
    document.querySelector(".reset").classList.add("visible");
  } else {
    document.querySelector(".start").classList.remove("collapse");
    document.querySelector(".higher").classList.remove("visible");
    document.querySelector(".lower").classList.remove("visible");
    document.querySelector(".right").classList.remove("visible");
    document.querySelector(".reset").classList.remove("visible");
  }
};

const guessNumber = function () {
  if (isHigher) {
    min = currentGuess + 1;
  } else {
    max = currentGuess - 1;
  }
  currentGuess = calcRange();
  document.querySelector(".header").textContent =
    `Is your number ${currentGuess}?`;
};

const calcRange = function () {
  return Math.floor((min + max) / 2);
};

const disableButtons = function (toggle) {
  document.querySelector(".higher").disabled = toggle;
  document.querySelector(".lower").disabled = toggle;
  document.querySelector(".right").disabled = toggle;
};

const resetAll = function () {
  toggleVisibility("hide");
  document.querySelector(".header").textContent =
    "Think of a number between 1-100!";

  min = 1;
  max = 100;
  currentGuess = 50;
  disableButtons(false);
};

document.querySelector(".start").addEventListener("click", function () {
  toggleVisibility("show");

  currentGuess = calcRange();
  document.querySelector(".header").textContent =
    `Is your number ${currentGuess}?`;
});

document.querySelector(".higher").addEventListener("click", function () {
  isHigher = true;
  guessNumber();
});

document.querySelector(".lower").addEventListener("click", function () {
  isHigher = false;
  guessNumber();
});

document.querySelector(".right").addEventListener("click", function () {
  document.querySelector(".header").textContent = "That was kinda easy..";
  disableButtons(true);
});

document.querySelector(".reset").addEventListener("click", function () {
  resetAll();
});
