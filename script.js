function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remeinder(a, b) {
  return a % b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "X":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return remeinder(a, b);
    default:
      alert("invalid operator");
  }
}

let displayValue = "";
let upperDisp = "";

const btns = Array.from(document.querySelectorAll(".btn"));
const numbers = btns.filter((cur) => !isNaN(Number(cur.innerHTML)));
const disp = document.querySelector(".display");
const clear = document.querySelector(".AC");
const deleteLast = document.querySelector(".C");
const addBtn = document.querySelector(".add");
const subtrBtn = document.querySelector(".subtr");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const remein = document.querySelector(".remeinder");
const equals = document.querySelector(".equal");
const numDispUpper = document.querySelector(".num-disp-upper");
const numDispLower = document.querySelector(".num-disp-lower");

// console.log(btns, numbers);

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    numDispLower.innerHTML += btn.innerHTML;
    displayValue = numDispLower.innerHTML;
    // console.log(displayValue);
  });
});

clear.addEventListener("click", () => {
  numDispLower.innerHTML = "";
  numDispUpper.innerHTML = "";
  displayValue = "";
  upperDisp = "";
  //   console.log(displayValue);
});

deleteLast.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  if (displayValue.length === 0) return;
  //   console.log(displayValue);
  numDispLower.innerHTML = numDispLower.innerHTML.slice(0, -1);
  displayValue = displayValue.slice(0, -1);
});

function handleOperation(e) {
  let val;

  if (upperDisp.includes(e.target.innerHTML)) {
    const arr = upperDisp.split(" ");

    switch (e.target.innerHTML) {
      case "+":
        val = add(Number(arr[0]), Number(displayValue));
        break;
      case "-":
        val = subtract(Number(arr[0]), Number(displayValue));
        break;
      case "X":
        val = multiply(Number(arr[0]), Number(displayValue));
        break;
      case "/":
        val = divide(Number(arr[0]), Number(displayValue));
        break;
      case "%":
        val = remeinder(Number(arr[0]), Number(displayValue));
        break;
    }
    numDispLower.innerHTML = "";
    displayValue = "";
    upperDisp = val.toString() + " " + e.target.innerHTML;
    console.log(e.target.innerHTML);
  } else {
    upperDisp += displayValue + " " + e.target.innerHTML;
    numDispLower.innerHTML = "";
    displayValue = "";
  }

  console.log(upperDisp);
  console.log(displayValue);
  console.log(val);
}
