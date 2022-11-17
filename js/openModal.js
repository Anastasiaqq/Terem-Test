let modal = document.createElement('div')
let st = modal.style
let node = `<div class="modalBody">
                <h1>Hello world</h1> <br> 
                <div class="close">X</div>
            </div>`;
st.position = 'fixed'
st.top = '0'
st.left = '0'
st.width = '99%'
st.height = '100%'
st.display = 'none'
st.background = '#ffffffb3';
st.zIndex = '1'


document.body.prepend(modal);
modal.innerHTML = node;
let bst = modal.querySelector('.modalBody').style
bst.display = 'flex'
bst.justifyContent = 'space-between';
bst.placeSelf = 'center';
bst.margin = '0 auto';
bst.width = '400px';
bst.height = '100px';
bst.background = 'white';
bst.border = '1px solid gray';
bst.boxShadow = '5px 5px 5px gray, -5px 5px 5px gray'

setTimeout(() => {
    st.display = 'flex';
}, 1000);

let closeBtn = modal.querySelector('.close')
closeBtn.addEventListener('click', () => {
    st.display = 'none'
})