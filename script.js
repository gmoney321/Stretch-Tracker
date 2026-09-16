const stretches = document.querySelectorAll('.stretch-card');
var currentStretchIndex = 0;
const nextButton = document.querySelectorAll(".next-btn"); 
let timeLeft = 120;
let timerInterval;
const startButton = document.querySelectorAll(".start-btn");
const chime = new Audio('chime.mp3');

nextButton.forEach((button) => {
    button.addEventListener("click", () => {
    if (currentStretchIndex < stretches.length - 1) {
        currentStretchIndex++;
        showStretch(currentStretchIndex);
    }
    resetTimer();
    });
});

startButton.forEach((button) => {
    button.addEventListener("click", () => {
    startTimer();
    });
});

function showStretch(index) {
    stretches.forEach((stretch,idx) => {
        if (idx === index) {
            stretch.classList.add('active');
            stretch.classList.remove('hidden');
        } else {
            stretch.classList.add('hidden');
            stretch.classList.remove('active');
        }
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft --;
        displayTime();
        
        timer.forEach((time) => {
            time.textContent = `${minutes}:${String(seconds).padStart(2,'0')}`;
        })
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
        if (timeLeft === 119 || timeLeft === 90 || timeLeft === 60 || timeLeft === 30 || timeLeft === 0) {
            chime.play();
        } 
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 120;
    displayTime();
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const timer = document.querySelectorAll('.timer')
    timer.forEach((time) => {
            time.textContent = `${minutes}:${String(seconds).padStart(2,'0')}`;
    });      
}