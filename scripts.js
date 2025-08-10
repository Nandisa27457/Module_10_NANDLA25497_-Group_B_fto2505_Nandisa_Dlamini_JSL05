import { initialTasks } from "./initialData.js";

let tasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;

/**
 * Creates a single task DOM element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks.
 */
function renderTasks(tasksArray) {
  clearExistingTasks();
  tasksArray.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}

/**
 * Opens the modal dialog with pre-filled task details.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
function setupModalCloseHandler() {
  document.querySelectorAll("#close-modal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest("dialog").close();
    });
  });
}

/**
 * Saves tasks array to localStorage.
 */
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Handles adding a new task from the modal form.
 */
function setupAddTaskFormHandler() {
  const addTaskForm = document.getElementById("add-task-form");

  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("new-task-title").value.trim();
    const description = document.getElementById("new-task-desc").value.trim();
    const status = document.getElementById("new-task-status").value;

    if (!title) {
      alert("Task title is required!");
      return;
    }
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask = {
      id: nextId, // unique ID
      title,
      description,
      status,
    };

    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks(tasks);

    // Reset form & close modal
    addTaskForm.reset();
    document.getElementById("add-task-modal").close();
  });
}

/**
 * Initializes the task board.
 */
function initTaskBoard() {
  renderTasks(tasks);
  setupModalCloseHandler();
  setupAddTaskFormHandler();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);
