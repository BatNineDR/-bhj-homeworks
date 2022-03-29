const items = document.getElementById('items')
const loader = document.getElementById('loader')
let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send()
xhr.onload = function getDataVal() {
    let data = JSON.parse(xhr.response)
    dataVal = data.response.Valute;
    printVal(dataVal)
}

function printVal(val){
    for(let key in val){
        items.insertAdjacentHTML('afterbegin',`<div class="item">
        <div class="item__code">
        `+ val[key].CharCode +`</div><div class="item__value">`
       + val[key].Value +`</div><div class="item__currency">
        руб.</div></div>`)
    }
    loader.classList.remove('loader_active')
}