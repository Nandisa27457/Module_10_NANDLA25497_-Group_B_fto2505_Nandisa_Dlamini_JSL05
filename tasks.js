// tasks.js
import { initialTasks } from "./initialData.js";

// Save to localStorage if not already stored
if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
}

// Get from localStorage as source of truth
export const savedTasks = JSON.parse(localStorage.getItem("tasks"));
