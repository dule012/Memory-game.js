let label = document.querySelectorAll('label')

for (let i = 0; i < label.length; i++) {
    ((i) => {
        label[i].addEventListener('click',()=>{
            console.log(label[i].firstElementChild.value)
        })
    })(i)
}