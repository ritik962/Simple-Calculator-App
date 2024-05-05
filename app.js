const displayEl = document.querySelector("#input");


function appendToDisplay(input) {
  displayEl.value += input;
}

function clearDisplay() {
  displayEl.value = "";
}

function deleteValue() {
  displayEl.value = displayEl.value.slice(0, -1);
}

function calculate() {
  try {
    displayEl.value = eval(displayEl.value);
  } catch (error) {
    displayEl.value = "Error";
  }
}
