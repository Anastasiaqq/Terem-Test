function hideHeader() {
    cnt1++;
    if(cnt1%2 === 0) {
        document.querySelector('.heading').style.display = 'block';
    }
    else if(cnt1%2 === 1) {
        document.querySelector('.heading').style.display = 'none';
    }
}
function switchPlaces() {
    cnt2++;
    if(cnt2%2 === 1) {
        document.querySelector('#switch').style.order = '1';
    }
    else if(cnt2%2 === 0) {
        document.querySelector('#switch').style.order = '';
    }
}

let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let cnt1 = 0;
let cnt2 = 0;
button1.addEventListener('click', hideHeader);
button2.addEventListener('click', switchPlaces);
