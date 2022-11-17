class ResultObj {
    constructor(input1, input2, select1, select2, select3, select4, select5) {
        this.input1 = input1;
        this.input2 = input2;
        this.select1 = select1;
        this.select2 = select2;
        this.select3 = select3;
        this.select4 = select4;
        this.select5 = select5;
    }
}

function createResult(e) {
    let id = e.target.id;
    let v = e.target.value;

    res[id] = v;
    resstr = JSON.stringify(res);
    p.innerText = resstr;
}

function submitForm(e) {
    e.preventDefault();
    sendData().then((response) => {
        alert(response);
    })
    .catch((e) => alert('Error' + e));
}

async function sendData() {
    return await fetch('/apply/', {
        method: 'GET',
        headers: { 'Content-Type': 'multipart/form-data' }
      });
}

let res = new ResultObj('undefined', 'undefined','undefined','undefined','undefined','undefined','undefined');
let resstr;
let btn = document.querySelector('button');
let p = document.querySelector('.result')
// btn.addEventListener('click', e => e.preventDefault());
let form = document.querySelector('form');
form.addEventListener('submit', submitForm);
let fields = document.querySelectorAll('.input');
for(let f of fields) {
    f.addEventListener('change', createResult);
}
