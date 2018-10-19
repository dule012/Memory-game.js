const labels = document.querySelectorAll('input')
const scripts = document.getElementsByTagName('script')
const body = document.body

for (let i = 0; i < labels.length; i++) {

    labels[i].addEventListener('click', (e) => {

        if (e.currentTarget == labels[0] && scripts[1].getAttribute('src') !== 'ToGuess2.js') {
            scripts[1].remove()
            const ToGuess2 = document.createElement('script')
            ToGuess2.setAttribute('src', './js/ToGuess2.js')
            body.append(ToGuess2)
        } else if (e.currentTarget == labels[1] && scripts[1].getAttribute('src') !== 'ToGuess3.js') {
            scripts[1].remove()
            const ToGuess3 = document.createElement('script')
            ToGuess3.setAttribute('src', './js/ToGuess3.js')
            body.append(ToGuess3)
        }
        console.log('hello')
    })
}
