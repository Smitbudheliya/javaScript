// Function to view tasks from localStorage
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
const addtask = () => {
    let task = document.getElementById('task').value;
    let obj = {
        taskid: Math.floor(Math.random() * 100000000000000),
        task: task
    }
    if (localStorage.getItem('alltask') == null || localstorge.getItem('alltask') === undefined) {
        alltask.push(obj);
        localStorage.setItem('alltask', JSON.stringify(alltask));
        alert('task successfully add');
        document.getElementById('task').value = "";
        viewTask();
    } else {
        let tasks = JSON.parse(localStorage.getItem('alltask'));
        tasks.push(obj);
        localStorage.setItem('alltask', JSON.stringify(tasks));
        alert("Task successfully add");
        document.getElementById('task').value = "";
        viewTask();
    }
}