let counterValue = 0;
let intervalId;

function startCounter() {
  intervalId = setInterval(incrementCounter, 250);
}

function stopCounter() {
  clearInterval(intervalId);
}

function incrementCounter() {
  counterValue++;
  displayCounterValue();
}

function decrementCounter() {
  counterValue--;
  displayCounterValue();
}

function incrementByInputValue() {
  const incrementValue = parseInt(document.getElementById('increment-value').value);
  counterValue += incrementValue;
  displayCounterValue();
}

function resetCounter() {
  counterValue = 0;
  displayCounterValue();
}

function displayCounterValue() {
  const counterElement = document.getElementById('counter');
  counterElement.innerText = counterValue;
}

const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startCounter);

const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', stopCounter);

const incrementButton = document.getElementById('increment-btn');
incrementButton.addEventListener('click', incrementCounter);

const decrementButton = document.getElementById('decrement-btn');
decrementButton.addEventListener('click', decrementCounter);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetCounter);

const incrementValueButton = document.getElementById('incrementt-btn');
incrementValueButton.addEventListener('click', incrementByInputValue);

