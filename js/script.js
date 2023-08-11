
const btnAddChores = document.querySelector('.main__btn');
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo__list');
const completedList = document.querySelector('.completed__list');

btnAddChores.addEventListener('click', () => {
    if (input.value.length > 0) {
        const li = document.createElement('li');
        todoList.appendChild(li);
        li.className = 'list__item';
        li.innerText = input.value;  
        input.value = "";
        const btn = document.createElement('button');
        li.appendChild(btn);
        btn.addEventListener('click', () => {
            todoList.removeChild(li);
            completedList.appendChild(li);
            btn.classList.add('_done');
            li.classList.add('_done');
            btn.disabled = true;
        });
    }
})












