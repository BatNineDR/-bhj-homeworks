const input = document.getElementById("task__input");
const add = document.getElementById("tasks__add");
const list = document.querySelector('.tasks__list');

add.addEventListener('click', addTask);

function addTask() {
    event.preventDefault();
    if (input.value != " ") {
        list.insertAdjacentHTML(`beforeEnd`,
            `<div class = "task">
        <div class = "task__title"> ${input.value} </div> 
        <a href = "#"
        class = "task__remove">&times;</a> </div>`
        );
        input.value = ``;
    }

    //const cross = Array.from(document.querySelectorAll(`.task__remove`));
    //const task = Array.from(document.querySelectorAll(`.task`));

    // for (let i = 0; i < cross.length; i++) {
    //   cross[i].addEventListener('click', () => {
    //     task[i].remove();
    //})
    //}

    const task = Array.from(document.querySelectorAll(".task__remove"));
    task[task.length - 1].addEventListener("click", () => {
        list.removeChild(task[task.length - 1].closest(".task"));
    })
}