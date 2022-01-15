const input = document.getElementById('task_input');
const button = document.getElementById('add_task');

const taskList = [
    {
        id: 0,
        task: "Task 1........"
    },
    {
        id: 1,
        task: "Task 2........"
    },
    {
        id: 2,
        task: "Task 3........"
    }
];

function deleteTask(e){
    taskList.splice(e.target.id, 1);
    render();
}

function changeTask(e){
    const changeTask = prompt('Change task:', taskList[e.target.id].task);
    taskList[e.target.id].task = changeTask;
    render()
}

function render(){
    document.querySelector('.task_list').remove();

    const taskListBlock = document.createElement('div');
    taskListBlock.setAttribute('class', 'task_list');

    for(let i = 0; i < taskList.length; i++){
        const task = `
        <div class="task">
            <p>${taskList[i].task}</p>
            <div>
                <button id="${i}" onclick="deleteTask(event)">Delete</button>
                <button id="${i}" onclick="changeTask(event)">Change</button>
            </div>
        </div>`
        taskListBlock.innerHTML += task;
    }

    document.querySelector('.content').append(taskListBlock);
}

button.onclick = () => {

    if(input.value.length >= 10){
        const obj = {
            id: taskList.length,
            task: input.value
        };
        taskList.push(obj);
        input.value = "";
        render();
    }else{
        console.log("text min length 10!")
    }

}


render()
input.addEventListener('change', (e)=>{
    if (e.target.value.length >= 10){
        const newTask = {
            id: taskList.length,
            task: e.target.value
        };
        taskList.push(newTask);

        e.target.value = ''
        render()
    }
    else {
        alert("Введи больше 10 символов !!! ")
    }
})

// input.onchange = (e) => {
//    console.log(e.target.value)
// }
