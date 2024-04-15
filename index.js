function addTask() {
  var taskInput = document.getElementById("task").value;
  if (!taskInput) return;
  var tasks = getTasksFromStorage() || [];
  tasks.push(taskInput);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task").value = "";
  display(tasks);
}

function display(tasks) {
  var taskListContainer = document.getElementById("taskList");
  taskListContainer.innerHTML = "";
  tasks.map((task) => {
    var li = document.createElement("li");
    li.textContent = task;
    taskListContainer.appendChild(li);
  });
}
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
window.onload = () => {
  var tasks = getTasksFromStorage();
  if (tasks) {
    display(tasks);
  }
};
function clearStorage() {
  var removeItem = localStorage.removeItem("tasks");
  window.onload();
  return removeItem;
}
