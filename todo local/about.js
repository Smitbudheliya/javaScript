
const viewTask = () => {
    const task = JSON.parse(localStorage.getItem('alltask')) || [];
    let tbl = "";
    task.map((val, index) => {
        tbl += `
            <tr>
                <td>${val.taskid}</td>
                <td>${val.task}</td>
                <td> <button onclick="deleteTask(${val.taskid})" class="btn btn-danger"> Delete </button> </td>
            </tr>
        `;
    });
    document.getElementById('todolist').innerHTML = tbl;
};

const addTask = () => {
    let task = document.getElementById('task').value.trim(); 

    if (task === "") {
        alert("Please enter a valid task.");
        return false;
    }

    let obj = {
        taskid: Math.floor(Math.random() * 10000000), 
        task: task
    };

    if (localStorage.getItem('alltask') === null || localStorage.getItem('alltask') === undefined) {
        let alltask = [];
        alltask.push(obj); // new task add
        
        localStorage.setItem('alltask', JSON.stringify(alltask));
        alert("Task successfully added (first task).");
    }
    else {
        let task = JSON.parse(localStorage.getItem('alltask'));
        task.push(obj);
        localStorage.setItem('alltask', JSON.stringify(task));
        alert("Task successfully added.");
    }

    document.getElementById('task').value = "";
    viewTask();
};
viewTask();
const deleteTask = (taskid)=> {
    let task = JSON.parse(localStorage.getItem('alltask'));
    task = task.filter(task => task.taskid !== taskid);
    localStorage.setItem('alltask', JSON.stringify(task));
    viewTask();
}
const deletAll = ()=>{
    localStorage.removeItem('alltask')
    viewTask();
}