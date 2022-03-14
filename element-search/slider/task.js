const nextBtn = document.querySelector('.slider__arrow_next');
const prevBtn = document.querySelector('.slider__arrow_prev');
const sliders = document.querySelectorAll('.slider__item');
const slidersArr = Array.from(sliders);

function getIndex(element) {
    if(element.className === 'slider__item slider__item_active')
    return true
}

let activeIndex = slidersArr.findIndex(getIndex);

const getNextIndex = function (index) {
    return index < slidersArr.length -1 ? activeIndex + 1 : 0;
}

const getPrevIndex = function (index) {
    return index > 0 ? activeIndex -1 : slidersArr.length-1;
}

nextBtn.onclick = function() {
    slidersArr[activeIndex].className = 'slider__item';
    activeIndex = getNextIndex(activeIndex);
    slidersArr[activeIndex].className = 'slider__item slider__item_active';
}

prevBtn.onclick = function() {
    slidersArr[activeIndex].className = 'slider__item';
    activeIndex = getPrevIndex(activeIndex);
    slidersArr[activeIndex].className = 'slider__item slider__item_active'
}