const taskList = document.querySelector('.task-list');
const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');

addTask.addEventListener('click', () => {
    const task = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('btn-delete');
    task.textContent = taskInput.value;
    task.append(deleteButton);
    task.classList.add('task');
    taskList.append(task);
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
});
