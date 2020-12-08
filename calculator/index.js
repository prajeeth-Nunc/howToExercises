let buttons = document.querySelectorAll(".switches button");
let input = document.querySelector(".display .input");
let output = document.querySelector(".display .output");
let displaybox = document.querySelector(".display");
let history = document.querySelector(".output-box .a");
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ["+", "-", "%", "/", "*"];
let brackets = ["&#40;", "&#41;"];

buttons.forEach((btn) => {
  btn.setAttribute("onClick", "getBtnValue(this);");
});

function getBtnValue(btn) {
  if (btn.value === "AC") {
    input.textContent = 0;
    output.textContent = "";
  } else if (btn.value === "Ans") {
    let Ans = input.textContent;
    console.log(Ans);
  } else if (btn.value === "del") {
    input.textContent = input.textContent.slice(0, -1);
    if (input.textContent.length === 0) {
      input.textContent = 0;
    }
  } else if (digits.includes(parseInt(btn.value))) {
    resetInput();
    input.textContent = input.textContent + btn.value;
  } else if (operators.includes(btn.value)) {
    let lastChar = input.textContent.slice(-1);
    if (operators.includes(lastChar)) {
      exceptionAlert();
    } else {
      input.textContent = input.textContent + btn.value;
    }
  } else if (btn.value === "=") {
    let result = Calculate(input.textContent);
    output.textContent = input.textContent + btn.value + result;
    input.textContent = result;
  } else {
    input.textContent = input.textContent + btn.value;
  }
  console.log(input.textContent);
}

function exceptionAlert() {
  displaybox.style.cssText =
    "box-shadow: inset 10px 10px 10px -10px red,\
        inset -10px -10px 10px -10px red";
  setTimeout(() => {
    displaybox.style.cssText =
      "box-shadow: inset 10px 10px 10px -10px rgba(0, 0, 0, 0.5),\
        inset -10px -10px 10px -10px rgba(0, 0, 0, 0.5)";
  }, 500);
}

function resetInput() {
  if ((input.textContent.length === 1) & (input.textContent === "0")) {
    input.textContent = "";
  }
}

function Calculate(input) {
  return 10;
}
