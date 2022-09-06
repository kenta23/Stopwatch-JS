//selecting elements from HTML 
const timerContainer = document.querySelector("#timerContainer");
const timerDisplay = document.querySelector("#timerDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let timerInterval;
let hours = 0;
let mins = 0
let seconds = 0;

//create an addEventListener for each buttons 
startButton.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000)
    }
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)
  
    seconds = formatZeroes(seconds);
    minutes = formatZeroes(minutes);
    hours = formatZeroes(hours); 

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function formatZeroes(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit
      
   }
}

pauseButton.addEventListener("click", () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(timerInterval);
    }
});
resetButton.addEventListener("click", () => {
      paused = true;
      clearInterval(timerInterval);
      startTime = 0;
      elapsedTime = 0;
      currentTime = 0;
      hours = 0;
      mins = 0
      seconds = 0; 
      timerDisplay.textContent = "00:00:00";
});


