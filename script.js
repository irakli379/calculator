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
const numbers = btns.filter((cur) => !isNaN(Number(cur.textContent)));
const disp = document.querySelector(".display");
const clear = document.querySelector(".AC");
const deleteLast = document.querySelector(".C");
const addBtn = document.querySelector(".add");
const subtrBtn = document.querySelector(".subtr");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const remein = document.querySelector(".remeinder");
const equals = document.querySelector(".equal");
const period = document.querySelector(".period");
const numDispUpper = document.querySelector(".num-disp-upper");
const numDispLower = document.querySelector(".num-disp-lower");

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    numDispLower.textContent += btn.textContent;
    displayValue = numDispLower.textContent;
  });
});

clear.addEventListener("click", () => {
  numDispLower.textContent = "";
  numDispUpper.textContent = "";
  displayValue = "";
  upperDisp = "";
});

deleteLast.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  if (displayValue.length === 0) return;
  numDispLower.textContent = numDispLower.textContent.slice(0, -1);
  displayValue = displayValue.slice(0, -1);
});

function handleOperation(e) {
  let val;

  if (!displayValue) return;

  if (
    numDispUpper.textContent &&
    !(
      upperDisp.includes("+") ||
      upperDisp.includes("-") ||
      upperDisp.includes("X") ||
      upperDisp.includes("/") ||
      upperDisp.includes("%")
    )
  ) {
    displayValue = numDispUpper.textContent;
  }

  if (
    upperDisp.includes("+") ||
    upperDisp.includes("-") ||
    upperDisp.includes("X") ||
    upperDisp.includes("/") ||
    upperDisp.includes("%")
  ) {
    const arr = upperDisp.split(" ");

    switch (arr[1]) {
      case "+":
        val = add(Number(arr[0]), Number(displayValue));
        break;
      case "-":
        val = subtract(Number(arr[0]), Number(displayValue));
        break;
      case "X":
        console.log(Number(displayValue) === 0);
        if (Number(displayValue) === 0) {
          alert("You can not multiply by zero.");
          return;
        }
        val = multiply(Number(arr[0]), Number(displayValue));
        break;
      case "/":
        if (Number(displayValue) === 0) {
          alert("You can not divide by zero.");
          return;
        }
        val = divide(Number(arr[0]), Number(displayValue));
        break;
      case "%":
        val = remeinder(Number(arr[0]), Number(displayValue));
        break;
    }

    numDispUpper.textContent = val.toString() + " " + e.target.textContent;
    numDispLower.textContent = "";
    displayValue = "";
    upperDisp = val.toString() + " " + e.target.textContent;
  } else {
    upperDisp += displayValue + " " + e.target.textContent;
    numDispLower.textContent = "";
    displayValue = "";
    numDispUpper.textContent = upperDisp;
  }
}

addBtn.addEventListener("click", handleOperation);
subtrBtn.addEventListener("click", handleOperation);
divideBtn.addEventListener("click", handleOperation);
multiplyBtn.addEventListener("click", handleOperation);
remein.addEventListener("click", handleOperation);

equals.addEventListener("click", () => {
  if (!displayValue || !numDispUpper.textContent) return;

  if (
    numDispUpper.textContent &&
    !numDispLower.textContent &&
    !(
      numDispUpper.textContent.includes("+") ||
      numDispUpper.textContent.includes("-") ||
      numDispUpper.textContent.includes("X") ||
      numDispUpper.textContent.includes("/") ||
      numDispUpper.textContent.includes("%")
    )
  ) {
    return;
  }

  const arr = upperDisp.split(" ");

  if (Number(displayValue) === 0 && (arr[1] === "X" || arr[1] === "/")) {
    alert("You can not multiply or divide by zero.");
    numDispLower.textContent = "";
    numDispUpper.textContent = "";

    displayValue = "";
    upperDisp = "";

    return;
  }
  const res = operate(Number(arr[0]), Number(displayValue), arr[1]);

  numDispUpper.textContent = res;

  numDispLower.textContent = "";
  displayValue = "";
  upperDisp = "";

  if (
    numDispUpper.textContent &&
    !(
      upperDisp.includes("+") ||
      upperDisp.includes("-") ||
      upperDisp.includes("X") ||
      upperDisp.includes("/") ||
      upperDisp.includes("%")
    )
  ) {
    displayValue = numDispUpper.textContent;
  }
});

period.addEventListener("click", () => {
  if (displayValue && !numDispLower.textContent.includes(".")) {
    numDispLower.textContent += ".";
  }
});
