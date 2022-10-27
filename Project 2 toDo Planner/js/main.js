const dom = {
    new: document.getElementById("new"),
    add: document.getElementById("add"),
    tasks: document.getElementById("tasks"),
    count: document.getElementById("count"),
}

const tasks = []

//adding the task on button click

dom.add.onclick = () => {
    const newTaskText = dom.new.value;
    if (newTaskText && ifNotHasTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks);
        dom.new.value = "";
        tasksRender(tasks)
    }
}

//function of the task adding
function addTask(text, list) {
    const timeStamp = Date.now()
    const task = {
        id: timeStamp,
        text, //because the name of variable in object EQUAL to func property, in our variable {text} will be created the proprty of (text) and the value will be setted from (text)
        isComplete: false,
    }
    list.push(task)
}

// check out the task exist in the tasks array
function ifNotHasTask(text, list) {
    const isNotHas = true;

    list.forEach((task) => {
        if (task.text === text) {
            alert("The task already exist");
            isNotHas = false;
        }
    });
    return isNotHas;
}

//the the output function

function tasksRender(list) {
    let htmlList = '';

    list.forEach((task) => {
        const cls = task.isComplete ? "toDo__task toDo__task-complete" : 'toDo__task';
        const checked = task.isComplete ? "checked" : '';

        const taskHtml = ` 
        <div id="${task.id}" class="${cls}">
            <label class="toDo__checkbox"> 
             <input type="checkbox" ${checked}>
             <div class="toDo__checkbox-div"></div>
            </label>
            <div class="toDo__task-text">${task.text}</div>
            <div class="toDo__task-del">-</div>
        </div>
        `

        htmlList = htmlList + taskHtml
    })

    dom.tasks.innerHTML = htmlList

    renderTasksCount(list)
}

//watching at the klick on checkbox task
dom.tasks.onclick = (event) => {
    const target = event.target;
    const isCheckBoxEl = target.classList.contains('toDo__checkbox-div');
    const isDeleteEl = target.classList.contains('toDo__task-del');

    if (isCheckBoxEl) {
        const task = target.parentElement.parentElement;
        const taskId = task.getAttribute("id");
        changeTaskStatus(taskId, tasks)
        tasksRender(tasks)
    }
    if (isDeleteEl){
        const task = target.parentElement;
        const taskId = task.getAttribute("id");
        deleteTask(taskId, tasks)
        tasksRender(tasks)
        console.log(tasks.length, tasks)
    }
}

// function of the task status changing
function changeTaskStatus(id, list){
    list.forEach((task) => {
        if (task.id ==id){
            task.isComplete = !task.isComplete
        }
    })
}

// deleting function
function deleteTask(id, list){
    list.forEach((task, indx) => {
        if(task.id == id){
            list.splice(indx, 1);
            console.log(list[indx])
        }
    })
    
}

//show how tasks we have
function renderTasksCount(list){
    dom.count.innerHTML = list.length;
}