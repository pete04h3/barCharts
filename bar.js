"use strict";

window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  console.log("Init function");
  setHeights();
}

// make array of 40
const array = [];

function setHeights() {
  // document.querySelectorAll(".bars").forEach((bar, i) => {});

  array.length = 40;

  for (let i = 0; i < array.length; i++) {
    let bar;
    bar = document.querySelector(`#container > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", array[i]);
  }

  setTimeout(moveBars, 500);
}

function moveBars() {
  let randomNumber = Math.floor(Math.random() * 32 + 1);
  console.log("scrollbar function");

  array.shift();

  array.push(randomNumber);

  setHeights();
}
