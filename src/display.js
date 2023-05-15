// selectors to manipulate
const newListScreen = document.querySelector(".new-list-screen");
const popUp = document.querySelector(".pop-up");
const detailsInput = document.querySelector("#add-details-input");
const dueDateInput = document.querySelector("#due-date");

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

const showDueDateInput = () => {
  const displayStatus = window.getComputedStyle(dueDateInput).display;

  if (displayStatus === "none") {
    dueDateInput.style.display = "block";
  } else {
    dueDateInput.style.display = "none";
  }
};

const addNewList = () => {
  const active = document.querySelector(".nav-bar_active");
  active.classList.remove("nav-bar_active");

  const listNameInput = document.querySelector("#new-list-input");
  const formListName = listNameInput.value;
  const container = document.querySelector(".nav-bar");
  const content = document.createElement("button");
  content.textContent = formListName;
  content.classList.add("nav-bar_active");
  container.insertBefore(
    content,
    container.children[container.children.length - 1]
  );
  listNameInput.value = "";
  newListFormClose();
};

const activateList = (e) => {
  const active = document.querySelector(".nav-bar_active");
  const starred = document.querySelector(".nav-bar__favorite-button");
  const clickedClass = e.target.classList.value;
  if (e.target.textContent === "+ New list") {
    newListFormOpen();
  } else if (clickedClass === "starred-list") {
    active.classList.remove("nav-bar_active");
    starred.classList.add("nav-bar_active");
  } else if (clickedClass === "nav-bar") {
    // nothing
  } else {
    active.classList.remove("nav-bar_active");
    e.target.classList.add("nav-bar_active");
  }
};

// export section
export {
  newListFormOpen,
  newListFormClose,
  addNewTask,
  closePopUp,
  showDetailsInput,
  showDueDateInput,
  addNewList,
  activateList,
};