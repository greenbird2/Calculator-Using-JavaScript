let displayValue = "0";

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue.slice(-1);
  if ("+-*/%.".includes(lastChar)) return;
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteLast() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = "Error";
  }
  updateDisplay();
}

updateDisplay();
