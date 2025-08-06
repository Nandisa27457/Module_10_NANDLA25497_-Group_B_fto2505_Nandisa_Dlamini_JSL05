import { savedTasks } from "./tasks.js";

/**
 * An object mapping task statuses to their corresponding task container elements in the DOM.
 *
 * Each key (`todo`, `doing`, `done`) represents a task status, and its value is the `<div>` element
 * where tasks of that status should be displayed.
 *
 * @type {{
 *   todo: HTMLDivElement
 *   doing: HTMLDivElement
 *   done: HTMLDivElement
 * }}
 */

//Selecting the relevant status containers.
const columns = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container'),
};

/**
 * Loops through the initialTasks array and renders each task
 * in the appropriate column based on its status. Adds a click
 */
/**
 * Loops through each task in the initialTasks array and performs an operation on it.
 */

savedTasks.forEach((task) => {
  const taskDiv = document.createElement("div"); // Created a div within the task container
  taskDiv.textContent = task.title; // Adding the title text into the created div
  taskDiv.dataset.description = task.description; //Adding task description
  taskDiv.classList.add("task-div"); //adding the class to the div that is styled in the CSS file.

  //if statement to match the task to its respective status matching the fetched columns.
  if (columns[task.status]) {
    columns[task.status].appendChild(taskDiv); //Appending the status to the right column.
  }
});

//=======
//Modal
//=======

/** @type {HTMLDivElement} 
const modal = document.getElementById("modal");
/** @type {HTMLInputElement} 
const taskTitleInput = document.getElementById("taskTitleInput");
/** @type {HTMLTextAreaElement} 
const taskDescriptionInput = document.getElementById("taskDescriptionInput");
/** @type {HTMLSelectElement} 
const taskStatusSelect = document.getElementById("taskStatusSelect");
*/

//Select form and modal input from DOM.
const modal = document.getElementById("taskModal");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskStatusSelect = document.getElementById("taskStatus");
const closeBtn = document.querySelector(".close-btn");

/**
 * Handles the click event on a task to open the modal
 * and populate it with the task's details.
 */
//Event listener for tasks
document.querySelectorAll(".task-div").forEach((taskDiv) => {
  taskDiv.addEventListener("click", () => {
    taskTitleInput.value = taskDiv.textContent; //Ensure task title input includes relevant task content
    taskDescriptionInput.value = taskDiv.dataset.description; // Ensure description matches task.

    //Select status that applies to the column of the relevant task
    const parentColumn = taskDiv
      .closest(".column-div")
      .getAttribute("data-status");
    taskStatusSelect.value = parentColumn; //find parent first column that has the task clicked.

    //Remove hidden styling on CSS
    modal.classList.remove("hidden");
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
/*Render function to ensure task is populated from localStorage*/

// Export renederTasks
export function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const columns = {
    todo: document.querySelector('[data-status="todo"] .tasks-container'),
    doing: document.querySelector('[data-status="doing"] .tasks-container'),
    done: document.querySelector('[data-status="done"] .tasks-container'),
  };

  // Clear all columns before re-rendering
  Object.values(columns).forEach((column) => (column.innerHTML = ""));

  // Add each task to its correct column
  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.textContent = task.title;
    taskDiv.setAttribute("data-id", task.id); // useful for click/edit

    columns[task.status]?.appendChild(taskDiv);
  });
}
