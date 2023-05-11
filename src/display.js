// selectors to manipulate
const newListScreen = document.querySelector(".new-list-screen");
const popUp = document.querySelector(".pop-up");
const detailsInput = document.querySelector("#add-details-input");

// functions to manipulate DOM elements
const newListFormOpen = () => {
  newListScreen.style.display = "block";
};

const newListFormClose = () => {
  newListScreen.style.display = "none";
};

const addNewTask = () => {
  popUp.style.display = "flex";
};

const closePopUp = () => {
  popUp.style.display = "none";
};

const showDetailsInput = () => {
  const displayStatus = window.getComputedStyle(detailsInput).display;

  if (displayStatus === "none") {
    detailsInput.style.display = "block";
  } else {
    detailsInput.style.display = "none";
  }
};

// export section
export {
  newListFormOpen,
  newListFormClose,
  addNewTask,
  closePopUp,
  showDetailsInput,
};