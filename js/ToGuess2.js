const listOfCardTypes = [
    "far fa-gem",
    "fas fa-golf-ball",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-bomb"
]
const Game_table = document.getElementsByClassName('table2')

const cards = document.getElementsByClassName('card2')

const table = document.createElement('div')
table.setAttribute('class', 'table2')
document.body.append(table)

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 2; j++) {
        const div_wrapper = document.createElement('div')
        div_wrapper.setAttribute('class', 'card2')
        table.append(div_wrapper)

        const div_front = document.createElement('div');
        div_front.setAttribute('class', 'front')
        div_wrapper.append(div_front)

        const div_back = document.createElement('div')
        div_back.setAttribute('class', 'back')
        div_wrapper.append(div_back)

        const card_type = document.createElement('i')
        card_type.setAttribute('class', listOfCardTypes[i])
        div_back.append(card_type)
    }
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cards[i].style.transform = 'rotateY(180deg)'
    })
}