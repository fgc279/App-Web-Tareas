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
                // deteleTask(task.text)
                console.log("eliminando tarea");
            }
            li.appendChild(deleteButton)

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
            tasks.push({text: taskText, completed: true})     
            taskImput.value=""
            saveTasks(tasks)
            loadTasks()
        }
    }
    

    //función para eliminar una tarea
    //función para cambiar el estado de la tarea (completa/incompleta)

    //evento para agregar la tarea
    addButton.addEventListener("click", addTask)

    //cargar todas las tareas al iniciar
    loadTasks()
})

