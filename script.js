"use strict";

const formInput = document.querySelector(".js--form__input");
const formBtn = document.querySelector(".form__btn");
const jsTodosWrapper = document.querySelector(".js--todos-wrapper");

function saveTodos() {
  const todos = [];
  jsTodosWrapper.querySelectorAll(".todo-item").forEach(li => {
    todos.push({
      text: li.querySelector(".todo-item__description").textContent,
      checked: li.querySelector("input[type=checkbox]").checked
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(todo => {
    const todoItem = document.createElement("li");
    const todoInput = document.createElement("input");
    const todoSpan = document.createElement("span");
    const todoBtn = document.createElement("button");

    todoItem.classList.add("todo-item");
    todoInput.type = "checkbox";
    todoInput.checked = todo.checked;
    todoSpan.classList.add("todo-item__description");
    todoSpan.textContent = todo.text;
    todoBtn.classList.add("todo-item__delete");
    todoBtn.textContent = "Видалити";

    todoItem.appendChild(todoInput);
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(todoBtn);

    jsTodosWrapper.appendChild(todoItem);
  });
}

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!formInput.value.trim()) return;

  const todoItem = document.createElement("li");
  const todoInput = document.createElement("input");
  const todoSpan = document.createElement("span");
  const todoBtn = document.createElement("button");

  todoItem.classList.add("todo-item");
  todoInput.type = "checkbox";
  todoSpan.classList.add("todo-item__description");
  todoSpan.textContent = formInput.value;
  todoBtn.classList.add("todo-item__delete");
  todoBtn.textContent = "Видалити";

  todoItem.appendChild(todoInput);
  todoItem.appendChild(todoSpan);
  todoItem.appendChild(todoBtn);

  jsTodosWrapper.appendChild(todoItem);
  formInput.value = "";

  saveTodos();
});

jsTodosWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-item__delete")) {
    e.target.parentElement.remove();
    saveTodos();
  }

  if (e.target.type === "checkbox") {
    e.target.nextElementSibling.classList.toggle("todo-item--checked", e.target.checked);
    saveTodos();
  }
});

document.addEventListener("DOMContentLoaded", loadTodos);



