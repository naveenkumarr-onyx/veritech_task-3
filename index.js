function addTask() {
  var taskInput = document.getElementById("task").value;
  var tasks = JSON.parse(localStorage.getItem("taskInput")) || [];
  tasks.push(taskInput);
  localStorage.setItem(taskInput, JSON.stringify(tasks));
  display(tasks);
}
function display(listName) {
  var listContainer = document.getElementById("taskList");
  listContainer.innerHTML = listName;
}

// function display(listName) {
//   var taskListContainer = document.getElementById("taskList");
//   taskListContainer.innerHTML = "";
//   var ul = document.createElement("ul");

//   listName.forEach((task) => {
//     var listItem = document.createElement("li");
//     task.textContent = listItem;
//     ul.appendChild(listItem);
//   });
//   taskListContainer.appendChild(ul);
// }
// window.onload = () => {
//   display("default");
// };

// document.addEventListener("DOMContentLoaded", () => {
//   let addButton = document.getElementById("btn");
//   let addInput = document.getElementById("task");

//   addButton.addEventListener("click", function () {
//     // grab the value of the input tag
//     let newItem = document.getElementById("item").value;
//     // if the input tag is not empty then run our function to add an item
//     if (newItem) {
//       // this function will add a new item to the todo list
//       addItemTodo(newItem);
//       // reset the input after we added a new item
//       document.getElementById("item").value = "";
//     }
//   });
//   // user press enter
//   addInput.addEventListener("keypress" || "click", function (e) {
//     console.log(e);
//     // did the user press *enter*? if yes then continue
//     if (13 === e.keyCode) {
//       // grab the value of the input tag
//       let newItem = document.getElementById("item").value;
//       // if the input tag is not empty then run our function to add an item
//       if (newItem) {
//         // this function will add a new item to the todo list
//         addItemTodo(newItem);
//         // reset the input after we added a new item
//         document.getElementById("item").value = "";
//       }
//     }
//   });

//   function addItemTodo(text) {
//     let list = document.getElementById("todo");
//     let item = document.createElement("li");
//     list.innerHTML = text;
//   }
// });
