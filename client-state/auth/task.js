const authButton = document.getElementById("signin__btn");
const greetingPhrase = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const form = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const greetingUser = () => {
    signin.classList.remove("signin_active");
    greetingPhrase.classList.add("welcome_active");
    userId.innerText = localStorage.userName
}

if (localStorage.userName) {
    greetingUser();
} else {
    signin.classList.add("signin_active");
}


authButton.addEventListener("click", (evt) => {
    let formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onload = () => {
        let authData = JSON.parse(xhr.responseText);
        if (authData.success) {
            localStorage.userName = authData["user_id"];
            greetingUser();
        } else {
            alert("Неверный логин/пароль");
        }
    }
    evt.preventDefault();
})