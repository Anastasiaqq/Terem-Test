let p = document.querySelector('.result')
let form = document.querySelector('form');
form.addEventListener('submit', submitForm);
let fields = document.querySelectorAll('.input');

async function submitForm(e) {
    e.preventDefault();
    let elements = form.elements;
    let arr = [];
    for(let i = 0; i<elements.length; i++) {
        arr.push(elements[i].value);
    }
    p.innerText = JSON.stringify(arr)
    await fetch('/apply/', {
        method: 'GET',
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((response) => alert(response))
      .catch((e) => alert('Error' + e));
}

