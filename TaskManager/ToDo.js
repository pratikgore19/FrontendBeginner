let listItems = $("#list-items");
let inputField = $("#todo-task");
let currentTask = "";

inputField.on({
    'input': function (e) {
        currentTask = e.target.value;
    },
    'keyup': function (e) {
        if (e.key == 'Enter') {
            addTask();
        }
    }
})

function createNode() {
    const taskElement = $('<li>', {
        'class': 'tasks',
        'id': listItems.children().length + 1
    });
    const taskSpace = $('<span>', {
        'class': 'task-space'
    }).text(currentTask);
    taskElement.append(taskSpace);
    const deleteIcon = $('<span>', {
        'class': 'delete-icon'
    }).html('&#x2715');
    taskElement.append(deleteIcon);
    deleteIcon.click(function () {
        taskElement.remove();
    })
    return taskElement;
}

function addTask() {
    if (currentTask !== undefined && currentTask !== null && currentTask !== "") {
        let taskElement = createNode();
        console.log('created node element', taskElement);
        listItems.append(taskElement);
        inputField.val("");
    }
    else {
        alert("Please enter valid input first");
    }
}

$("#add-button").click(addTask);

$("#reset-button").click(function () {
    listItems.remove();
})
