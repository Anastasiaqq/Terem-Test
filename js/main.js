function hideHeader() {
    document.querySelector('.heading').classList.toggle('.heading-hidden')
}
function switchPlaces() {
    document.querySelector('#switch').classList.toggle('order-changed')
}

let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
button1.addEventListener('click', hideHeader);
button2.addEventListener('click', switchPlaces);
