
const viewTask = () => {
    const tasks = JSON.parse(localStorage.getItem('alltask')) || [];
    let tbl = "";
    tasks.map((val, index) => {
        tbl += `
            <tr>
                <td>${val.taskid}</td>
                <td>${val.task}</td>
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
        let tasks = JSON.parse(localStorage.getItem('alltask'));
        tasks.push(obj);
        localStorage.setItem('alltask', JSON.stringify(tasks));
        alert("Task successfully added.");
    }

    document.getElementById('task').value = "";
    viewTask();
};
viewTask();