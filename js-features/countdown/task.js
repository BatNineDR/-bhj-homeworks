let timerDown = document.getElementById('timer')
function timetCount(){
    if(timerDown.textContent >= 0){
        timerDown.textContent = Number(timerDown.textContent) - 1
    }
    if(timerDown.textContent == 0){
        setTimeout(() => alert('Вы победили в конкурсе!'), 1000)
        clearInterval(timerInterval)
    }
}
let timerInterval = setInterval(timetCount, 1000)