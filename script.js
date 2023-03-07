const displayBox = document.querySelector(".display");
console.log(displayBox.innerHTML);
const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "*",
  "-",
  "+",
  ".",
];

function showDisplay(event) {
  const x = event.target.innerText;
  console.log(typeof x);
  {
    if (displayBox.innerText == 0) {
      displayBox.innerText = x;
    } else displayBox.innerText += x;
    displayBox.innerText = displayBox.innerText;
  }
}

function showDisplayByKey(event) {
  console.log(event);
  if (arr.includes(event.key)) {
    const x = event.key;
    if (displayBox.innerHTML == 0) {
      displayBox.innerHTML = x;
    } else displayBox.innerText += x;

    //  else displayBox.innerText += x;
  }
}

function allClear() {
  displayBox.innerHTML = 0;
}
function allClearByKey(event) {
  if (event.key == "Escape") {
    displayBox.innerHTML = 0;
  }
}

function clearLast() {
  const text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}
function clearLastByKey(event) {
  if (event.key == "Backspace") {
    const text = displayBox.innerText;
    if (text.length === 1) {
      displayBox.innerText = 0;
    } else {
      displayBox.innerText = text.substring(0, text.length - 1);
    }
  }
}

function calculate() {
  displayBox.innerText = eval(displayBox.innerText);
}
function calculateByKey(event) {
  if (event.key == "Enter") {
    displayBox.innerText = eval(displayBox.innerText);
  }
}

let list = document.querySelectorAll(".show-display");

list.forEach((item) => item.addEventListener("click", showDisplay));
window.addEventListener("keydown", showDisplayByKey);

document.querySelector(".all-clear").addEventListener("click", allClear);
window.addEventListener("keydown", allClearByKey);

document.querySelector(".clear-last").addEventListener("click", clearLast);
window.addEventListener("keydown", clearLastByKey);

document.querySelector(".calculate").addEventListener("click", calculate);
window.addEventListener("keydown", calculateByKey);
