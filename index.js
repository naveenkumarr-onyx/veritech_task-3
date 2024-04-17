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
  tasks.forEach((task, index) => {
    var li = document.createElement("li");
    var div = document.createElement("div");
    div.classList.add("btnContainer");
    li.textContent = task;

    // Add update functionality
    var btn = document.createElement("button");
    btn.textContent = "update";
    btn.classList.add("updateBtn");
    btn.addEventListener("click", () => {
      var newTask = prompt("Update task:", task);
      if (newTask !== null) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        display(tasks);
      }
    });

    // li.addEventListener("click", () => {
    //   const clickedIndex = Array.from(taskListContainer.children).indexOf(li);
    //   if (index === clickedIndex) {
    //     li.classList.toggle("style");
    //   }
    // });

    // Add delete functionality
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 2);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      display(tasks);
    });
    div.appendChild(btn);
    div.appendChild(deleteButton);
    li.appendChild(div);
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
  localStorage.removeItem("tasks");
  display([]);
}
