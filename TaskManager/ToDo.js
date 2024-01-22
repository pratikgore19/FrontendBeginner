let listItems = document.getElementById("list-items");
let addButton = document.getElementById("add-button");
let inputField = document.getElementById("todo-task");
let resetButton = document.getElementById("reset-button");


let currentTask = "";

inputField.addEventListener('input', function(e) {
    currentTask = e.target.value;
})

function createNode() {
    let numberOftasks = listItems.childElementCount;
    let taskElement = document.createElement('li');
    let taskSpace = document.createElement('span')
    let textNode = document.createTextNode(currentTask);
    taskSpace.appendChild(textNode);
    taskElement.appendChild(taskSpace);
    taskSpace.className = 'task-space';
    let deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '&#x2715';
    taskElement.appendChild(deleteIcon);
    taskElement.id = "task"+(numberOftasks+1);
    deleteIcon.addEventListener('click',function() {
        taskElement.remove();
    })
    return taskElement;
}

function addTask() {
    if(currentTask!==undefined && currentTask!==null && currentTask!=="") {
        let taskElement = createNode();
        listItems.appendChild(taskElement);
        inputField.value = "";
        currentTask = "";
    }
    else {
        alert("Please enter valid input first");
    }
}

addButton.addEventListener('click', addTask);
inputField.addEventListener('keyup',function(e) {
    if (e.key=='Enter') {
        addTask();
    }
});

resetButton.addEventListener('click', function() {
    for(i = 1; i<=listItems.childElementCount;i++) {
        listItems.remove(document.getElementById("task"+i));
    }
})
