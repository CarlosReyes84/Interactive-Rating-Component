
const btnSub = document.querySelector('.submit');
const buttons = document.querySelectorAll('.button');
const text = document.querySelector('.text')
const card = document.querySelector('.card')
const title = document.querySelector('.tittle');
const image = document.querySelector('.image')

let actualRating = 0;

//toggle class buttons
buttons.forEach(x => {
    x.addEventListener('click', toggleClass)
})

//submit
btnSub.addEventListener('click', rating)


function toggleClass(e) {
    const actual = e.target;

    //remove
    buttons.forEach(x => x.classList.remove('orange'))
    //add
    actual.classList.add('orange')

    //add number to rating
    actualRating = e.target.id;
}

function rating(e) {
    e.preventDefault()
    if(actualRating == 0) {
        console.log('you should score')
        const alert = document.createElement('DIV')
        const message = document.createElement('P')
        message.textContent = 'Please rate!'
        alert.appendChild(message)
        alert.classList.add('alert')
        card.appendChild(alert)

        //remove 
        setTimeout(() => {
            alert.remove()
        }, 2000)
    }else {
        text.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!"
        console.log(actualRating)

        //remove buttons
        image.src = './images/illustration-thank-you.svg'
        title.textContent = 'Thank You!'
        buttons.forEach(x => x.remove())
        btnSub.remove()
    }
    
}