// styles import
import "./style.css";
import "./checkbox.css";

// scripts import
import stickyScrollHeader from "./sticky-scroll";
import {
  newListFormOpen,
  newListFormClose,
  addNewTask,
  closePopUp,
  showDetailsInput,
} from "./display";
import submitNewTask from "./tasks";

// selectors
// ---------------------------------------------------

// element selectors for display manipulation
const newListButton = document.querySelector(".nav-bar__new-list-button");
const closeButton = document.querySelector(".top-bar__close-button");
const footerAddButton = document.querySelector(".footer__add-button");
const popUpBackground = document.querySelector(".pop-up__background");
const addDetailButton = document.querySelector(".footer__detail-button");

//  element selectors for task manipulation
const saveButton = document.querySelector(".pop-up__save-button");

// listeners
// ---------------------------------------------------

// scroll listeners for sticky header
window.addEventListener("scroll", stickyScrollHeader);

// click listeners for display manipulation
newListButton.addEventListener("click", newListFormOpen);
closeButton.addEventListener("click", newListFormClose);
footerAddButton.addEventListener("click", addNewTask);
popUpBackground.addEventListener("click", closePopUp);
addDetailButton.addEventListener("click", showDetailsInput);

// click listener for task manipulation
saveButton.addEventListener("click", submitNewTask);