const interestCheck = Array.from(document.querySelectorAll('input.interest__check'));

for (let i = 0; i < interestCheck.length; i++) {
    interestCheck[i].addEventListener('click', event => {
        if (!interestCheck[i].closest('.interests_active') && interestCheck[i].checked === true) {
            const commonInterest = interestCheck[i].closest(`.interest`);
            const specificInterest = commonInterest.querySelectorAll('.interest__check');
            for (let item of specificInterest) {
                item.checked = true;
            }

        } else if (!interestCheck[i].closest(`.interests_active`) && interestCheck[i].checked === false) {
            const commonInterest = interestCheck[i].closest(`.interest`);
            const specificInterest = commonInterest.querySelectorAll('.interest__check');
            for (let item of specificInterest) {
                item.checked = false;
            }
        }
    })

}