const input = document.querySelector('.input');
const addBtn = document.querySelector('.btn');
const error = document.querySelector('.error');
const ul = document.querySelector('.todo_list');
const deleteBtn = document.querySelector('.delete');
const deleteTask = document.querySelector('.icon')


const addTask = event => {
    event.preventDefault();


    if (input.value !== '') {
        newTask();
        input.value = '';
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }

}

const newTask = () => {

    const li = document.createElement('li');
    const button = document.createElement('button');
    li.classList.add('task');
    li.textContent = input.value;
    button.classList.add('icon');
    button.innerHTML = `<i class="far fa-trash-alt"></i>`
    li.appendChild(button);
    ul.appendChild(li);
}



const deleteOneTask = e => {
    const item = e.target;

    if (item.classList.contains('icon')) {
        item.parentElement.remove()

    }
}

const clearAll = () => {
    input.value = '';
    error.style.visibility = 'hidden';
    ul.innerHTML = '';

}


addBtn.addEventListener('click', addTask);
deleteBtn.addEventListener('click', clearAll);
ul.addEventListener('click', deleteOneTask);