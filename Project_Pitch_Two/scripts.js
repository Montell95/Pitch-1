// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  const taskForm = document.getElementById("task-form");
  const completedForm = document.getElementById("completed-task-form");
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); 


    taskForm.reset(); 
    completedForm.reset();

    
    const tasks = [];
    for (let i = 1; i <= 4; i++) {
      const taskValue = document.getElementById("task" + i).value;
      const deadlineValue = document.getElementById("deadline" + i).value;
      tasks.push({
        task: taskValue,
        deadline: deadlineValue
      });
    }

    console.log("Tasks Submitted:");
    console.log(tasks);
    alert("Tasks saved! (Check console for now)");
  });

  completedForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

     const completedTasks = [];
    for (let i = 1; i <= 4; i++) {
      const isChecked = document.getElementById("completed" + i).checked;
      const comment = document.getElementById("comment" + i).value;
      completedTasks.push({
        taskNumber: i,
        completed: isChecked,
        comment: comment
      });
    }

    console.log("Completed Tasks:");
    console.log(completedTasks);
    alert("Task completion recorded! (Check console)");
  });
});
