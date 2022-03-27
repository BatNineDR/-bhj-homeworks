let dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let add = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector(`.cart__products`);

dec.forEach((el) => {
    el.addEventListener(`click`, () => {
        el.nextElementSibling.innerHTML--;
        if (el.nextElementSibling.innerHTML < 1) {
            el.nextElementSibling.innerHTML = 1;
        }
    })
})

inc.forEach((el) => {
    el.addEventListener(`click`, () => {
        el.previousElementSibling.innerHTML++;
    })
})

add.forEach((el) => {
    el.addEventListener(`click`, () => {
        const id = el.closest(`.product`).dataset.id;
        const cartProduct = Array.from(document.querySelectorAll(`.cart__product`));
        const img = el.closest(`.product`).querySelector(`.product__image`).src;
        const value = el.closest(`.product`).querySelector(`.product__quantity-value`);

        const inCart = cartProduct.find(elem => id == elem.dataset.id);
        if (inCart == undefined) {
            cartProducts.insertAdjacentHTML("beforeend", `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src ="${img}">
            <div class="cart__product-count">${value.innerHTML}</div>
        </div>
        `)
        } else {
            //const addedProd = cartProduct.find(elem => id == elem.dataset.id);
            const addedValue = inCart.lastElementChild;
            addedValue.innerHTML = Number(addedValue.innerHTML) + Number(value.innerHTML);
        }
    })
})