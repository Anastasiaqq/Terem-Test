let modal = document.createElement('div')

setTimeout(() => {
    modal.classList.add('modal-show')
}, 1000);

let closeBtn = modal.querySelector('.close')
closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-show')
})