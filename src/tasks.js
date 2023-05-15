// eslint-disable-next-line import/no-extraneous-dependencies
import { formatRelative, parseISO } from 'date-fns';

import {
  hideDetailsInput,
  hideDueDateInput,
  setNormalPriority,
  resetTaskForm,
  closePopUp,
} from "./display";

// array to store tasks
const myTasks = [];

// factory to create new tasks
const Task = (name, detail, list, dueDate, priority) => {
  const getName = () => name;
  const getDetail = () => detail;
  const getList = () => list;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  return { getDetail, getName, getList, getDueDate, getPriority };
};

// task object manipulation
export default function submitNewTask() {
  const formTask = document.querySelector("#new-task-input");
  const formDetail = document.querySelector("#add-details-input");
  const activeList = document.querySelector(".nav-bar_active");
  const footerStarButton = document.querySelector(".footer__starred-button");
  const dueDateValue = document.querySelector("#due-date").value;
  let dueDate = "";

  if (dueDateValue === "") {
    dueDate = "";
  } else {
    const today = new Date();
    dueDate = formatRelative(parseISO(dueDateValue), today);
  };

  const newTask = Task(
    formTask.value,
    formDetail.value,
    activeList.textContent,
    dueDate,
    footerStarButton.id
  );

  resetTaskForm();
  hideDetailsInput();
  hideDueDateInput();
  setNormalPriority();

  myTasks.push(newTask);

  closePopUp();

  myTasks.forEach((task) => {
    console.log(task.getName());
    console.log(task.getDetail());
    console.log(task.getList());
    console.log(task.getDueDate());
    console.log(task.getPriority());
  });
}