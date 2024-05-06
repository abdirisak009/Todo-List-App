const userInput = document.getElementById("input")
const addTaskBtn = document.getElementById("addTask")
const todoContainer = document.getElementById("todoContainer")

let taskInput = "";

addTaskBtn.addEventListener("click", () => {
    taskInput = userInput.value;
    console.log(taskInput); 
    if (userInput.value === ""){
        alert("please add task text")
    } else {
        const todoItem = document.createElement('div');
        todoItem.classList.add('flex', 'justify-between', 'items-center', 'mt-2', 'mx-2');
    
        const heading = document.createElement("h1");
        heading.classList.add('text-white');
        heading.textContent = taskInput;
    
        const doneBtn = document.createElement('button');
        doneBtn.classList.add('px-5', 'py-1', 'bg-green-500', 'px-2', 'rounded-lg', 'text-white');
        doneBtn.textContent = "Done"
    
        todoContainer.appendChild(todoItem);
        todoItem.appendChild(heading);
        todoItem.appendChild(doneBtn);

        doneBtn.addEventListener("click", () => {
            heading.classList.toggle('line-through')
        })
    
        userInput.value = "";
    }
})