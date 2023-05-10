import "./style.css";
import "./checkbox.css";
import stickyScrollHeader from "./sticky-scroll";
import {
  newListButton,
  newListFormOpen,
  newListButtonClose,
  newListFormClose
} from "./todo";

window.addEventListener("scroll", stickyScrollHeader);

newListButton.addEventListener("click", newListFormOpen);
newListButtonClose.addEventListener("click", newListFormClose)