let fontSizes = Array.from(document.querySelectorAll('.font-size'));
let books = document.querySelector('.book');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener("click", switchSize);
}

function switchSize(event) {
    for (let i = 0; i < fontSizes.length; i++) {
        fontSizes[i].classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
    if (this.dataset.size == undefined) {
        books.className = 'book';
    } else if (this.dataset.size.includes('small')) {
        books.classList.add('font-size_small');
        books.classList.remove('font-size_big');
    } else {
        books.classList.add('font-size_big');
        books.classList.remove('font-size_small');
    }
    event.preventDefault();
}