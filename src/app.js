
const btnSub = document.querySelector('.submit');
let buttons = document.querySelectorAll('.button');

buttons.forEach(x => {
    x.addEventListener('click', e => {
        const actual = document.querySelector('.orange');


        //remove
        actual.classList.remove('orange')

        //add
        e.target.classList.add('orange')
    })
})