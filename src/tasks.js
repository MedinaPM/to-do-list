import { closePopUp } from "./display";

// array to store tasks
const myTasks = [];

// factory to create new tasks
const Task = (name, detail, list) => {
  const getName = () => name;
  const getDetail = () => detail;
  const getList = () => list;

  return { getDetail, getName, getList };
};

// task object manipulation
export default function submitNewTask() {
  const formTask = document.querySelector("#new-task-input");
  const formDetail = document.querySelector("#add-details-input");
  const activeList = document.querySelector(".nav-bar_active");

  const newTask = Task(
    formTask.value,
    formDetail.value,
    activeList.textContent
  );

  const taskForm = document.querySelector("#task-form");
  taskForm.reset();

  myTasks.push(newTask);
  
  closePopUp();

  myTasks.forEach(task => {
    console.log(task.getName());
    console.log(task.getDetail());
    console.log(task.getList());
  });
}