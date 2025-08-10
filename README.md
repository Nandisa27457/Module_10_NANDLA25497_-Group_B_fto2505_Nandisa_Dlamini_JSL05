#  Task Board with Local Storage Persistence and Task Creation

The task management system is where tasks are persisted in local storage, ensuring that tasks remain available even after refreshing the page or reopening the application. Users will be able to add new tasks, with the task details being stored in local storage and displayed in the appropriate columns ("To Do", "Doing", "Done"). The application will also include an Add Task modal for creating new tasks.


## Features

- Tasks saved to localStorage.
- Add new task.
- Inlcude new task to task board.
- New Task modal.



## Technologies Used 

- JavaScript.
- HTML.
- CSS.



## Usage/Examples

1. Add a New Task
Scenario: You want to track a new feature you’re building.
Steps:

Click "Add New Task".

In the modal form:

Title: "Implement Login Page"

Description: "Create responsive login form with validation"

Status: todo

Click Add Task.
Result:

The task appears in the To Do column.

It’s saved in localStorage so it’s still there after refreshing.

2. View Task Details
Scenario: You want to see the description of a task.
Steps:

Click on the task "Implement Login Page".

The task details modal opens showing:

Title: "Implement Login Page"

Description: "Create responsive login form with validation"

Status: todo
Result:
You can review or update task information from here (if editing is enabled).

3. Update a Task Status
Scenario: You’ve started working on a task.

Steps:

Click the task "Implement Login Page".

Change status from todo → doing.

Save changes (if edit/save is implemented).
Result:

Task moves to the Doing column.

Change is stored in localStorage.

4. Refresh & Persist Data
Scenario: You close the browser and come back later.
Steps:

Open your task board page again.

All previously added tasks appear exactly where you left them.
Result:

Tasks persist because they’re stored in localStorage.



## Set-up

Installation Guide — Task Board
1. Clone or Download the Project
```
git clone https://github.com/your-username/task-board.git
Or click Download ZIP in GitHub and extract the files to your computer.
```

2. Open the Project Folder
```
cd task-board
```
3. Install a Local Web Server 


Some browsers block certain features (like localStorage) when opening .html files directly.
You can run the project through a lightweight server:

Option A: Using VS Code Live Server
Install the Live Server extension in VS Code.

Right-click index.html → Open with Live Server.

Option B: Using Node.js http-server
```
npm install -g http-server
http-server .
Then visit:

arduino
http://localhost:8080
```

4. Open the Application
In your browser, open the index.html file (or use your local server address).

You should see the task board with columns for To Do, Doing, and Done.

5. Using the Task Board
Add Tasks → Click "Add New Task" and fill in the modal form.

View Details → Click a task to see or edit its description and status.

Data Persistence → Tasks are saved to localStorage so they remain after refreshing.

6. Resetting the Board
If you want to start fresh:

Open Developer Tools in your browser (F12).

Go to Application → Local Storage.

Delete the tasks key.


    