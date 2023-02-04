
// Set up class
let x = 0;
class Task{
    constructor(task,im,dif){
        x++;
        this.task = task;
        this.im = Number(im);;
        this.dif = Number(dif);;
        this.id = x
        this.sum = this.im + this.dif;

    }
      
}

// Set up Test arrays
let tasksArray = []
/*
let task1 = new Task("need to fix that",2,3)
let task2 = new Task("finish that moive",1,1)
let task3 = new Task("Very importent",10,9)
*/
let task4 = new Task("Follow Isaak Marcel and Luke Belmar",1,0)
tasksArray.push(task4)
tasksArray.sort((a, b) => (a.sum < b.sum) ? 1 : -1); 

// Get Inputs
let createTaskButton = document.getElementById("create-task-button")

let TaskTextInput = document.getElementById('TaskTextInput')
let TaskimportanceInput = document.getElementById('TaskimportanceInput')
let TaskDifficultyInput = document.getElementById('TaskDifficultyInput')

// Create Task Object and add to task array and sort task array
createTaskButton.addEventListener("click", () => {
    let task = (new Task(TaskTextInput.value, TaskimportanceInput.value, TaskDifficultyInput.value))
    tasksArray.push(task)
    tasksArray.sort((a, b) => (a.sum < b.sum) ? 1 : -1);

    // Store the tasks in local storage
    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    let taskList = document.getElementById('ListOfTasks');
    taskList.innerHTML = '';

    
    for (let task of tasksArray) {
      
      let newTask = document.createElement('div');
      newTask.innerHTML = `
      <div id="bigBoy"> 
      <span class="taskText"> ${task.task}</span>  

      <div class="leftSideOfTasks"> 
      <span id=#span1>Importance: ${task.im}</span>
      <span id=#span1>Ease: ${task.dif}</span>
      </div>
      

      </div> `;


      // Add some css
      newTask.classList.add("newTask");
      newTask.addEventListener('click', function(){
        if (newTask.style.textDecoration !== 'line-through'){
            newTask.style.textDecoration = 'line-through';
            newTask.style.background = 'rgba(26, 250, 18,0.2) '
            // rgba(255,215,0,0.5)
        } else {
            newTask.style.textDecoration = 'none';
            newTask.style.background = "rgba(217, 217, 217, 0.5)";
        }
      });
      taskList.appendChild(newTask);

      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.classList.add('deleteButtonStyle')
      deleteButton.addEventListener('click', () => {
        newTask.remove();
        tasksArray = tasksArray.filter(t => t.id !== task.id);
        // Store the updated tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
      });
      
      newTask.appendChild(deleteButton);
      


    }
  TaskTextInput.value = "";

});

//check for Enter press
function enter (xinput){
xinput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
      createTaskButton.click();
    }
});
}
enter(TaskTextInput);
enter(TaskimportanceInput);
enter(TaskDifficultyInput);


// On page load, retrieve the tasks from local storage
window.onload = function() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasksArray = storedTasks;
    tasksArray.sort((a, b) => (a.sum < b.sum) ? 1 : -1);
    let taskList = document.getElementById('ListOfTasks');
    taskList.innerHTML = '';

    for (let task of tasksArray) {
      
      let newTask = document.createElement('div');
      newTask.innerHTML = `
      <div id="bigBoy"> 
      <span class="taskText"> ${task.task}</span>  

      <div class="leftSideOfTasks"> 
      <span>Importance: ${task.im}</span>
      <span>Ease: ${task.dif}</span>
      </div>
      

      </div> `;


      // Add some css
      newTask.classList.add("newTask");
      newTask.addEventListener('click', function(){
        if (newTask.style.textDecoration !== 'line-through'){
            newTask.style.textDecoration = 'line-through';
            newTask.style.background = 'rgba(26, 250, 18,0.2) '
            // rgba(255,215,0,0.5)
        } else {
            newTask.style.textDecoration = 'none';
            newTask.style.background = "rgba(217, 217, 217, 0.5)";
        }
      });
      taskList.appendChild(newTask);

      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.classList.add('deleteButtonStyle')
      deleteButton.addEventListener('click', () => {
        newTask.remove();
        tasksArray = tasksArray.filter(t => t.id !== task.id);
        // Store the updated tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
      });
      
      newTask.appendChild(deleteButton);
      


    }  
  }
}

