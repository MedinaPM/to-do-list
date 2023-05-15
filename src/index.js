// styles import
import "./style.css";
import "./checkbox.css";

// scripts import
import stickyScrollHeader from "./sticky-scroll";
import {
  newListFormClose,
  addNewTask,
  closePopUp,
  toggleDetailsInput,
  toggleDueDateInput,
  toggleTaskPriority,
  addNewList,
  activateList,
} from "./display";
import submitNewTask from "./tasks";

// selectors
// ---------------------------------------------------

// element selectors for display manipulation
const closeButton = document.querySelector(".top-bar__close-button");
const footerAddButton = document.querySelector(".footer__add-button");
const popUpBackground = document.querySelector(".pop-up__background");
const addDetailButton = document.querySelector(".footer__detail-button");
const doneButton = document.querySelector(".top-bar__done-button");
const listButtons = document.querySelector(".nav-bar");
const dueDateButton = document.querySelector(".footer__due-date-button");
const footerStarButton = document.querySelector(".footer__starred-button");

//  element selectors for task manipulation
const saveButton = document.querySelector(".pop-up__save-button");

// listeners
// ---------------------------------------------------

// scroll listeners for sticky header
window.addEventListener("scroll", stickyScrollHeader);

// click listeners for display manipulation
closeButton.addEventListener("click", newListFormClose);
footerAddButton.addEventListener("click", addNewTask);
popUpBackground.addEventListener("click", closePopUp);
addDetailButton.addEventListener("click", toggleDetailsInput);
doneButton.addEventListener("click", addNewList);
listButtons.addEventListener("click", activateList);
dueDateButton.addEventListener("click", toggleDueDateInput);
footerStarButton.addEventListener("click", toggleTaskPriority);

// click listener for task manipulation
saveButton.addEventListener("click", submitNewTask);