const input = document.getElementById('task_input');
const button = document.getElementById('add_task');

const taskList = [
    {
        id: 0,
        task: "Встать"
    },
    {
        id: 1,
        task: "Помыть лицо"
    },
    {
        id: 2,
        task: "Выспаться"
    }
];

function deleteTask(e){
    taskList.splice(e.target.id, 1);
    render()
}

function changeTask(e){
    const chnagedText = prompt('Change task:', taskList[e.target.id].task);
    taskList[e.target.id].task = chnagedText;
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


input.onchange = (e) => {
    console.log(e.target.value)
}
