const resultInput = document.getElementById("result");

function appendValue(value) {
  resultInput.value += value;
}

function clearResult() {
  resultInput.value = "";
}

function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultInput.value = eval(resultInput.value) || "0"; // Avoid empty results
  } catch (error) {
    resultInput.value = "Error";
  }
}
