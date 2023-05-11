import { closePopUp } from "./display";

// array to store tasks
const myTasks = [];

// factory to create new tasks
const Task = (name, detail) => {
  const getName = () => name;
  const getDetail = () => detail;

  return { getDetail, getName };
};

// task object manipulation
export default function submitNewTask() {
  const formTask = document.querySelector("#new-task-input");
  const formDetail = document.querySelector("#add-details-input");
  const newTask = Task(formTask.value, formDetail.value);
  const taskForm = document.querySelector("#task-form");

  myTasks.push(newTask);
  taskForm.reset();
  closePopUp();

  console.log(myTasks);
  console.log(myTasks[0].getName());
  console.log(myTasks[0].getDetail());
}