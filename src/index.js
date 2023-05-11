import "./style.css";
import "./checkbox.css";
import stickyScrollHeader from "./sticky-scroll";
import {
  newListFormOpen,
  newListFormClose,
  addNewTask,
  closePopUp,
  showDetailsInput,
} from "./display";

// scroll listeners for sticky header
window.addEventListener("scroll", stickyScrollHeader);

// element selectors to listen
const newListButton = document.querySelector(".nav-bar__new-list-button");
const closeButton = document.querySelector(".top-bar__close-button");
const footerAddButton = document.querySelector(".footer__add-button");
const popUpBackground = document.querySelector(".pop-up__background");
const addDetailButton = document.querySelector(".footer__detail-button");

// click listeners for display manipulation
newListButton.addEventListener("click", newListFormOpen);
closeButton.addEventListener("click", newListFormClose);
footerAddButton.addEventListener("click", addNewTask);
popUpBackground.addEventListener("click", closePopUp);
addDetailButton.addEventListener("click", showDetailsInput);