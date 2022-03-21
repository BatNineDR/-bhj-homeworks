setInterval(visible, 1000);

let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

function visible() {
    let index = rotatorCase.findIndex((rotator) => rotator.classList.contains("rotator__case_active"));
    rotatorCase[index].classList.remove("rotator__case_active");
    (index == (rotatorCase.length - 1)) ? rotatorCase[0].classList.add("rotator__case_active"): rotatorCase[index + 1].classList.add("rotator__case_active");
}