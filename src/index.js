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