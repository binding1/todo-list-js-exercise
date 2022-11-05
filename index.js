// A new task will be created as incomplete
function newTask(title, description) { //object with task and it's properties
  const task = {
    title: title, //title of said task
    description: description, //description of said task
    complete: false, //status of if the task has been completed

    logState: () => {
      console.log(`${task.title} has ${task.complete ? " " : " not "} been completed`) // Print the state of a task to the console in a nice readable way
    },

    markCompleted: () => {
      this.complete = true; // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    }
  };
  return task;
};


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

