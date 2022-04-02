const popup = document.getElementById("subscribe-modal");
if (document.cookie === "") {
    popup.classList.add("modal_active")
}

const closeButton = document.querySelector(".modal__close");
popupClose = () => {
    popup.classList.remove("modal_active");
    document.cookie = 'window=closed';
}
closeButton.addEventListener("click", popupClose)