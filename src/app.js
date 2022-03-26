
const btnSub = document.querySelector('.submit');
const buttons = document.querySelectorAll('.button');

buttons.forEach(x => {
    x.addEventListener('click', e => {
        const actual = e.target;


        //remove
        buttons.forEach(x => x.classList.remove('orange'))

        //add
        actual.classList.add('orange')
    })
})