import "./style.css";
import "./checkbox.css";
import stickyScrollHeader from "./sticky-scroll";
import {
  newListButton,
  newListFormOpen,
  closeButton,
  newListFormClose,
} from "./todo";

window.addEventListener("scroll", stickyScrollHeader);

newListButton.addEventListener("click", newListFormOpen);
closeButton.addEventListener("click", newListFormClose);




const footerAddButton = document.querySelector(".footer__add-button");
const popUp = document.querySelector(".pop-up");
const popUpBackground = document.querySelector(".pop-up__background");

const addNewTask = () => {
  popUp.style.display = "flex";
}
const closePopUp = () => {
  popUp.style.display = "none";
}


footerAddButton.addEventListener("click", addNewTask);
popUpBackground.addEventListener("click", closePopUp);