let xhr = new XMLHttpRequest()
const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')


xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()
xhr.onload = function(){
    let survey = JSON.parse(xhr.response)
    printSurvey(survey.data)
}

function printSurvey(val){
    pollTitle.innerHTML = val.title
    
    let answList = Array.from(val.answers)
    answList.forEach((e) => {
    pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
    ` + e + `
    </button>` )
    })
    
    const answAll = pollAnswers.querySelectorAll('.poll__answer')
    answAll.forEach((e) => e.addEventListener('click', function(){
        alert('Спасибо, ваш голос засчитан!')
    }))
}