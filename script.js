document.addEventListener("DOMContentLoaded", ()=>{
    //captura de elementos del DOM
    const taskImput = document.getElementById("agregarTarea")
    const addButton = document.getElementById("agregar")
    const taskList = document.getElementById("listaTareas")
    
    //cargar tareas desde Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML=""

        tasks.forEach(task => {
            const li = document.createElement("li")
            li.textContent = task.text

            if (task.completed) {
                li.classList.add("completed")
            }

            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Eliminar"
            deleteButton.onclick = ()=>{
                deteleTask(task.text)
            }
            li.appendChild(deleteButton)
            li.onclick = ()=>{
                toggleTaskCompletion(task.text)
            }

            taskList.appendChild(li)
        });
    }

    //función para guardar tareas en Local Storage
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    //función para agregar una nueva tarea
    function addTask() {
        const taskText = taskImput.value.trim();
        if (taskText) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push({text: taskText, completed: false})     
            taskImput.value=""
            saveTasks(tasks)
            loadTasks()
        }
    }

    //función para eliminar una tarea
        const deteleTask = (taskText) => {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter((task)=>task.text !== taskText)
            saveTasks(tasks)
            loadTasks()
        }

    //función para cambiar el estado de la tarea (completa/incompleta)
    const toggleTaskCompletion = (taskText) => {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const task = tasks.find((task)=>task.text == taskText)
        if (task) {
            task.completed = !task.completed
            saveTasks(tasks)
            loadTasks()
        }
    }

    //evento para agregar la tarea
    addButton.addEventListener("click", addTask)

    //cargar todas las tareas al iniciar
    loadTasks()
})

