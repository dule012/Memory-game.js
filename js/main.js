const labels = document.querySelectorAll('input')
const game_table2 = document.getElementsByClassName('table2')
const game_table3 = document.getElementsByClassName('table3')
const body = document.body

for (let i = 0; i < labels.length; i++) {

    labels[i].addEventListener('click', (e) => {

        if (e.currentTarget == labels[0] && game_table2.length == 0) {
            if (game_table3.length > 0) {
                game_table3[0].remove()
            }
            const listOfCardTypes2 = [
                "far fa-gem",
                "fas fa-golf-ball",
                "fab fa-android",
                "fa fa-bolt",
                "fa fa-cube",
                "fa fa-leaf",
                "fa fa-bicycle",
                "fa fa-bomb",
                "far fa-gem",
                "fas fa-golf-ball",
                "fab fa-android",
                "fa fa-bolt",
                "fa fa-cube",
                "fa fa-leaf",
                "fa fa-bicycle",
                "fa fa-bomb"
            ]

            //shuffle array
            for (let i = 0; i < listOfCardTypes2.length; i++) {
                let random = Math.floor(Math.random() * 14)
                let holder = listOfCardTypes2[random]
                listOfCardTypes2[random] = listOfCardTypes2[i]
                listOfCardTypes2[i] = holder
            }
            const comparasion = []
            let counter = 0
            let count_to_win = 0


            const cards = document.getElementsByClassName('card2')
            const table = document.createElement('div')
            table.setAttribute('class', 'table2')
            document.body.append(table)

            //create cards
            for (let i = 0; i < 16; i++) {
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
                card_type.setAttribute('class', listOfCardTypes2[i])
                div_back.append(card_type)
            }

            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener('click', (e) => {
                    if (counter < 2) {
                        cards[i].style.transform = 'rotateY(180deg)'
                        counter++
                        comparasion.push(e.currentTarget)
                        if (counter === 2) {
                            if (comparasion[0].lastElementChild.firstElementChild.className == comparasion[1].lastElementChild.firstElementChild.className) {
                                count_to_win += 2
                                count_to_win == 16 ? setTimeout(() => { location.reload() }, 5000) : null
                                counter = 0
                                while (comparasion.length > 0) {
                                    comparasion.splice(0, 1)
                                }

                            } else {
                                setTimeout(() => {
                                    comparasion[0].style.transform = 'rotateY(0deg)'
                                    comparasion[1].style.transform = 'rotateY(0deg)'
                                    counter = 0
                                    while (comparasion.length > 0) {
                                        comparasion.splice(0, 1)
                                    }
                                }, 1100)
                            }
                        }
                    }
                })
            }

        } else if (e.currentTarget == labels[1] && game_table3.length == 0) {
            if (game_table2.length > 0) {
                game_table2[0].remove()
            }
            const listOfCardTypes3 = [
                "far fa-gem",
                "fas fa-golf-ball",
                "fab fa-android",
                "fa fa-bolt",
                "fa fa-cube",
                "fa fa-leaf",
                "fa fa-bicycle",
                "fa fa-bomb", "far fa-gem",
                "fas fa-golf-ball",
                "fab fa-android",
                "fa fa-bolt",
                "fa fa-cube",
                "fa fa-leaf",
                "fa fa-bicycle",
                "fa fa-bomb", "far fa-gem",
                "fas fa-golf-ball",
                "fab fa-android",
                "fa fa-bolt",
                "fa fa-cube",
                "fa fa-leaf",
                "fa fa-bicycle",
                "fa fa-bomb"
            ]
            //shuffle array
            for (let i = 0; i < listOfCardTypes3.length; i++) {
                let random = Math.floor(Math.random() * 23)
                let holder = listOfCardTypes3[random]
                listOfCardTypes3[random] = listOfCardTypes3[i]
                listOfCardTypes3[i] = holder

            }
            const comparasion = []
            let counter = 0
            let count_to_win = 0


            const cards = document.getElementsByClassName('card3')
            const table = document.createElement('div')
            table.setAttribute('class', 'table3')
            document.body.append(table)

            //create cards
            for (let i = 0; i < 24; i++) {
                const div_wrapper = document.createElement('div')
                div_wrapper.setAttribute('class', 'card3')
                table.append(div_wrapper)

                const div_front = document.createElement('div');
                div_front.setAttribute('class', 'front')
                div_wrapper.append(div_front)

                const div_back = document.createElement('div')
                div_back.setAttribute('class', 'back')
                div_wrapper.append(div_back)

                const card_type = document.createElement('i')
                card_type.setAttribute('class', listOfCardTypes3[i])
                div_back.append(card_type)
            }

            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener('click', (e) => {
                    if (counter < 3) {
                        cards[i].style.transform = 'rotateY(180deg)'
                        counter++
                        comparasion.push(e.currentTarget)
                        if (counter === 3) {
                            if (comparasion[0].lastElementChild.firstElementChild.className == comparasion[1].lastElementChild.firstElementChild.className == comparasion[2].lastElementChild.firstElementChild.className) {
                                count_to_win += 3
                                count_to_win == 24 ? setTimeout(() => { location.reload() }, 5000) : null
                                counter = 0
                                while (comparasion.length > 0) {
                                    comparasion.splice(0, 1)
                                }
                            } else {
                                setTimeout(() => {
                                    comparasion[0].style.transform = 'rotateY(0deg)'
                                    comparasion[1].style.transform = 'rotateY(0deg)'
                                    comparasion[2].style.transform = 'rotateY(0deg)'
                                    counter = 0
                                    while (comparasion.length > 0) {
                                        comparasion.splice(0, 1)
                                    }
                                }, 1100)
                            }
                        }
                    }
                })
            }
        }
    })
}
