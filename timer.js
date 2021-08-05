// How to use code:
//  - Call setTimer(hours, minutes, seconds) to start timer
//  - Call resetTimer() to reset the timer
//  - Have an element with id 'timer' to place the timer
// Citation: Timer based on code from https://github.com/dtinth/countdown.html
// Citation: Clock based on code from https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock 


// ---------- TIMER ----------
var endTime = 0;

function setTimer(hours, minutes, seconds) {
    var duration = (hours * 60 * 60) + (minutes * 60) + seconds;
    endTime = (duration * 1000) + Date.now();
    timer()
}

function resetTimer() {
    endTime = 0
}

function timer() {
    var timeLeft = endTime - Date.now()

    if (timeLeft < 0) {
        document.getElementById('timer').innerHTML = '--:--:--'
    } 
    else {
        var minutes = Math.floor(timeLeft / (60 * 1000)) % 60
        var seconds = Math.floor(timeLeft / 1000) % 60

        document.getElementById('timer').innerHTML = `${minutes}:${seconds.toString(10).padStart(2, '0')}`
    }
}

setInterval(timer, 200)
