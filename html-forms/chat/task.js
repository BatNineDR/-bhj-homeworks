const chatWidgetSide = document.querySelector(`.chat-widget__side`);
const chatWidget = document.querySelector(`.chat-widget`);
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
chatWidgetSide.addEventListener('click', showChat);

const bot = [
    `Нихао`,
    `Мне лень работать`,
    `Слушай, давай завтра?`,
    `Ой, чё такой душный!`,
    `Всё, пока`
];

let hours = new Date().getHours();
let minutes = new Date().getMinutes();

function showChat() {
    chatWidget.classList.toggle('chat-widget_active');
}

input.addEventListener('change', sendMessage);

function sendMessage(event) {
    if (input.value) {
        messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">${input.value}</div>
    </div>
  `;
    } else {
        event.preventDefault;
    }

    botSays(bot);
}

function botSays(answer) {
    const random = Math.floor(Math.random() * (answer.length));
    return messages.innerHTML += `
    <div class="message">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">${answer[random]}</div>
    </div>
    `
}