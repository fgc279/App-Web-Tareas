document.addEventListener("DOMContentLoaded", ()=>{
    //captura de elementos del DOM
    const taskImput = document.getElementById("agregarTarea")
    const addButton = document.getElementById("agregar")
    const taskList = document.getElementById("listaTareas")
    

    //cargar tareas desde Local Storage
    function loadTasks() {
        console.log("cargando tareas");
        
    }
    //función para guardar tareas en Local Storage
    function saveTasks(tasks) {
        console.log("guardar tareas");
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
    //función para cambiar el estado de la tarea (completa/incompleta)

    //evento para agregar la tarea
    addButton.addEventListener("click", addTask)

    //cargar todas las tareas al iniciar
})

