let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));
let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener("click", openFunction);

function openFunction() {
    dropdownList.classList.toggle('dropdown__list_active');
}

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].onclick = function() {
        dropdownValue.textContent = this.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        return false;

    }
}