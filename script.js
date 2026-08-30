const taskInput = document.querySelector(".task-input")
const taskButton = document.querySelector(".task-button")
const taskList = document.querySelector(".task-list")

const totalNumber = document.querySelector(".total-number")
const pendingNumber = document.querySelector(".pending-number")
const completedNumber = document.querySelector(".completed-number")
const taskCheck = document.querySelector(".task-check")

const darkModeButton = document.querySelector(".dark-mode")

function darkModeClicked() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark") ? "enabled" : "disabled");    

    darkModeButton.textContent = 
        document.body.classList.contains("dark")
            ? "Light Mode" 
            : "Dark Mode";

}

darkModeButton.addEventListener("click", darkModeClicked)
const darkModeStatus = localStorage.getItem("darkMode");

if (darkModeStatus === "enabled") {
    document.body.classList.add("dark");
    darkModeButton.textContent = "Light Mode";
}   

function buttonClicked() {
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue === '') {
        console.log("Campo vazio, tarefa não adicionada.");
        return;
    }

    const taskValue = taskInputValue.charAt(0).toUpperCase() + taskInputValue.slice(1);

    const newTask = document.createElement("li");
    newTask.textContent = taskValue;
    taskList.appendChild(newTask);

    taskInput.value = ''; 

    updateCounters();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteTask);


    newTask.addEventListener("click", taskClicked)  

}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buttonClicked();
    }
});

function deleteTask(event) {
    const taskToDelete = event.target.parentElement;
    event.stopPropagation();
    taskToDelete.remove();
    updateCounters();
}

function taskClicked(event) {
    event.target.classList.toggle("completed");

    updateCounters();

    console.log(event.target);
    console.log(event.target.classList);

}


taskButton.addEventListener("click" , buttonClicked)


const allButton = document.querySelector(".all-button")
const pendingButton = document.querySelector(".pending-button")
const completedButton = document.querySelector(".completed-button")

allButton.addEventListener("click", allButtonClicked)
pendingButton.addEventListener("click", pendingButtonClicked)
completedButton.addEventListener("click", completedButtonClicked)

function allButtonClicked() {
    taskList.querySelectorAll("li").forEach((task) => {
        task.style.display = "flex";
    });

    allButton.classList.add("active");
    pendingButton.classList.remove("active");
    completedButton.classList.remove("active");
}

function pendingButtonClicked() {
    taskList.querySelectorAll("li").forEach((task) => {
        if (task.classList.contains("completed")) {
            task.style.display = "none";
        } else {
            task.style.display = "flex";
        }
});

    pendingButton.classList.add("active");
    allButton.classList.remove("active");
    completedButton.classList.remove("active");
}

function completedButtonClicked() {
    taskList.querySelectorAll("li").forEach((task) => {
        if (task.classList.contains("completed")) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }   
     });
    completedButton.classList.add("active");
    allButton.classList.remove("active");
    pendingButton.classList.remove("active");
}

function updateCounters() {
    totalNumber.textContent = taskList.children.length;
    pendingNumber.textContent = taskList.children.length - taskList.querySelectorAll(".completed").length;
    completedNumber.textContent = taskList.querySelectorAll(".completed").length;

    if (taskList.children.length === 0) {
        taskCheck.style.display = "block";
    } else {
        taskCheck.style.display = "none";
    }

}
