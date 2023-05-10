const aside = document.querySelector(".aside");

const newListButton = document.querySelector(".new-list");
const newListFormOpen = () => {
  aside.style.display = "flex";
}

const newListButtonClose = document.querySelector(".aside__close");
const newListFormClose = () => {
  aside.style.display = "none";
}

export {
  newListButton,
  newListFormOpen,
  newListButtonClose,
  newListFormClose
};