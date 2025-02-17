let record = [];
const viewTask = () => {
    let tbl = "";
    record.map((val, index) => {
        tbl += `
                    <tr>
                        <td>${val?.taskid}</td>
                        <td>${val?.taskname}</td>
                    </tr>
                `
    })
    document.getElementById('todolist').innerHTML = tbl;
}
viewTask();
const addTask = () => {
    let task = document.getElementById('task').value;
    let dup = record.filter((val) => {
        return val.taskname == task

    })
    if (dup.length == 1) {
        alert("Task is already exists");
        document.getElementById('task').value = "";
        return false;
    }
    let obj = {
        taskid: parseInt(Math.random() * 1000000),
        taskname: task
    }
    record.push(obj)
    document.getElementById('task').value = "";
    alert("task successfully add");
    viewTask();
}