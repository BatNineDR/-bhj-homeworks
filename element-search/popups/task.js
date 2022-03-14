const modalMain = document.getElementById('modal_main');
const closeElements = document.querySelectorAll('.modal__close');
const closeElementsArr = Array.from(closeElements);
const successBtn = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.className = 'modal modal_active';

closeElementsArr.forEach((elem) => {
    elem.onclick = function() {
        this.closest('.modal').className = 'modal';
        console.log(this.closest('.modal'))
    }
})

successBtn[0].onclick = function() {
    modalSuccess.className = 'modal modal_active';
    modalMain.className = 'modal';
}