const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');




const generateLi = (text) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${text}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML+=html;
};


addForm.addEventListener('submit',e => {
    e.preventDefault();
    const text= addForm.add.value.trim();
    if (text.length){
        generateLi(text); 
        addForm.reset();
    }

});