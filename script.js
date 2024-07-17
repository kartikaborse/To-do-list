const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskText = todoInput.value.trim(); 

    if (taskText !== '') {
        addTask(taskText); 
        todoInput.value = '';
    }
});


function addTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');

   
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');
    li.appendChild(taskSpan);

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    li.appendChild(checkbox);

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function() {
        editTask(li);
    });
    li.appendChild(editButton);

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteTask(li);
    });
    li.appendChild(deleteButton);

    todoList.appendChild(li); 
}


function markCompleted(taskElement) {
    taskElement.classList.toggle('task-completed');
}


function editTask(taskElement) {
    const taskTextElement = taskElement.querySelector('.task-text');
    let newTaskText = prompt('Edit task:', taskTextElement.textContent.trim());

    
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.textContent = newTaskText.trim();
    }
}


function deleteTask(taskElement) {
    taskElement.remove();
}
