let label = document.querySelectorAll('label')

for (let i = 0; i < label.length; i++) {
    ((i) => {
        label[i].addEventListener('click', () => {
            console.log(label[i].firstElementChild.value)
        })
    })(i)
}

let cards = document.querySelectorAll('.card3')

for (let i = 0; i < cards.length; i++) {
    ((i) => {

        cards[i].addEventListener('click', () => {
            cards[i].style.animation = 'same 1.4s linear '
        })

    })(i)
}