import { renderTasks } from "./scripts.js";

// addTask.js

// DOM elements
const openModalBtn = document.getElementById("openAddTaskModalBtn");
const modal = document.getElementById("new-task-Modal");
const closeModalBtn = modal.querySelector(".close-btn");
const createTaskBtn = modal.querySelector("button");

const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskStatusSelect = document.getElementById("taskStatus");

// Open modal
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("new-task-btn");
  const modal = document.querySelector("#new-task-Modal");

  if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Helper: Get tasks from localStorage
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Helper: Save tasks to localStorage
function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Helper: Generate unique ID (based on timestamp)
function generateTaskId() {
  return Date.now();
}

// Handle create task button click
createTaskBtn.addEventListener("click", () => {
  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const status = taskStatusSelect.value;

  // Create new task
  const newTask = {
    id: generateTaskId(),
    title,
    description,
    status,
  };

  // Get existing tasks, add new one, and save
  const tasks = getTasksFromStorage();
  tasks.push(newTask);
  saveTasksToStorage(tasks);

  // Close modal and clear input fields
  modal.classList.add("hidden");
  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  taskStatusSelect.value = "todo";

  // Re-render task board (this must exist in scripts.js)
  if (typeof renderTasks === "function") {
    renderTasks();
  } else {
    console.warn("renderTasks() not found");
  }
});
