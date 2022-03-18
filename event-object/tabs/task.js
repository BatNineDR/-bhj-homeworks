let tabs = Array.from(document.querySelectorAll('.tab'));
let content = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab) => tab.addEventListener("click", openTab));

function openTab(event) {
    let index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
    tabs[index].classList.remove("tab_active");
    content[index].classList.remove("tab__content_active");
    event.currentTarget.classList.toggle("tab_active");
    index = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
    content[index].classList.toggle("tab__content_active");
}