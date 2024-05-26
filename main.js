document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("input");
    const addTaskBtn = document.getElementById("addTask");
    const todoList = document.getElementById("todoList");

    // Function to add a todo item to the DOM
    function addTodoItem(task, done = false) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('flex', 'justify-between', 'items-center', 'mt-2', 'mx-2');

        const heading = document.createElement("h1");
        heading.classList.add('text-white');
        if (done) {
            heading.classList.add('line-through');
        }
        heading.textContent = task;

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('px-5', 'py-1', 'bg-green-500', 'px-2', 'rounded-lg', 'text-white');
        doneBtn.textContent = "Done";

        doneBtn.addEventListener("click", () => {
            heading.classList.toggle('line-through');
            saveData();
        });

        todoItem.appendChild(heading);
        todoItem.appendChild(doneBtn);
        todoList.appendChild(todoItem);
    }

    // Function to save todos to local storage
    function saveData() {
        const tasks = [];
        todoList.querySelectorAll('div').forEach(todoItem => {
            const taskText = todoItem.querySelector('h1').textContent;
            const isDone = todoItem.querySelector('h1').classList.contains('line-through');
            tasks.push({ text: taskText, done: isDone });
        });
        localStorage.setItem("data", JSON.stringify(tasks));
    }

    // Function to load todos from local storage
    function showData() {
        const savedTasks = JSON.parse(localStorage.getItem("data"));
        if (savedTasks) {
            savedTasks.forEach(task => addTodoItem(task.text, task.done));
        }
    }

    // Event listener for adding a new task
    addTaskBtn.addEventListener("click", () => {
        const taskInput = userInput.value.trim();
        if (taskInput === "") {
            alert("please add task text");
        } else {
            addTodoItem(taskInput);
            userInput.value = "";
            saveData();
        }
    });

    // Load todos when the page is loaded
    showData();
});
