const todoAddBtn = document.getElementById("todo-add-btn");
const todoContent = document.getElementsByClassName("todo-contents")[0];
const todoList = document.getElementsByClassName("to-do-list")[0];
const todoModal = document.getElementById("todo-modal");
const todoClose = document.getElementsByClassName("todo-close")[0];

todoAddBtn.onclick = () => {
  todoModal.style.display = "block";
};

todoClose.onclick = () => {
  todoModal.style.display = "none";
};
