const newListScreen = document.querySelector(".new-list-screen");

const newListButton = document.querySelector(".nav-bar__new-list-button");
const newListFormOpen = () => {
  newListScreen.style.display = "block";
};

const closeButton = document.querySelector(".top-bar__close-button");
const newListFormClose = () => {
  newListScreen.style.display = "none";
};

export { newListButton, newListFormOpen, closeButton, newListFormClose };