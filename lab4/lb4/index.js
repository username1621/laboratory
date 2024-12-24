const tasks = {};
let currentDate = new Date();
function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendar = document.getElementById("calendar");
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYear.textContent = `${month + 1}/${year}`;
    calendar.innerHTML = '';
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();
    const startDay = firstDay.getDay();
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = calendar.insertRow();
        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell();
            if (i === 0 && j < startDay) {
                cell.textContent = '';
            } else if (date > lastDay) {
                cell.textContent = '';
            } else {
                cell.textContent = date;
                const dateString = new Date(year, month, date).toDateString();
                cell.onclick = function () {
                    const day = cell.textContent;
                    document.getElementById('selected-date').innerText = `${day}.${month + 1}.${year}`;
                    showTasks(dateString);
                };
                if (tasks[dateString]){ cell.classList.add('has-tasks');


                }
                if (dateString === new Date().toDateString()) cell.classList.add('today');
                date++;
            }
        }
    }
    const row1 = calendar.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);
    var cell7 = row1.insertCell(6);
    cell1.innerHTML = "ВС";
    cell2.innerHTML = "ПН";
    cell3.innerHTML = "ВТ";
    cell4.innerHTML = "СР";
    cell5.innerHTML = "ЧТ";
    cell6.innerHTML = "ПТ";
    cell7.innerHTML = "СБ";
}
function showTasks(dateString) {
    const taskList = document.getElementById("tasks");
    const taskArray = tasks[dateString] || [];
    taskList.innerHTML = taskArray.length ? taskArray.join(', ') : "Планов нет!";
    const input = document.getElementById('new-task');

    document.getElementById('add-task').onclick = function() {
        const newTask = input.value;
        if(taskList.innerHTML !== "Планов нет!") taskList.innerHTML += ", ";
        if(newTask){
            if(taskList.innerHTML === "Планов нет!") taskList.innerHTML = "";
            tasks[dateString] = tasks[dateString] || [];
            tasks[dateString].push(newTask);
            renderCalendar();
            taskList.innerHTML +=  input.value;
        }
        input.value ="";
    }
}
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}
renderCalendar();


