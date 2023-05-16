// clear all items from screen before any render
const clearScreen = () => {
  const mainSection = document.querySelector(".main");
  while (mainSection.hasChildNodes()) {
    mainSection.removeChild(mainSection.firstChild);
  }
};

// element creator
const elementCreator = (
  target,
  element,
  className,
  idName,
  checkType,
  text,
  imgSrc,
  imgAlt
) => {
  const container = document.querySelector(target);
  const content = document.createElement(element);
  if (!(className === undefined)) {
    content.classList.add(className);
  }
  if (!(idName === undefined)) {
    content.id = idName;
  }
  if (!(checkType === undefined)) {
    content.type = checkType;
  }
  if (!(text === undefined)) {
    content.textContent = text;
  }
  if (!(imgSrc === undefined)) {
    content.src = imgSrc;
  }
  if (!(imgAlt === undefined)) {
    content.alt = imgAlt;
  }

  container.appendChild(content);
};

const renderElements = (array, item) => {
  // index of each item
  const itemID = array.indexOf(item);

  // task container
  elementCreator(".main", "div", "task-container", `task-${itemID}`);

  // checkbox render section
  // ---------------------------------------------------

  // label
  elementCreator(`#task-${itemID}`, "label", "task_checkbox_container");

  // input
  elementCreator(
    `#task-${itemID} > label`,
    "input",
    undefined,
    undefined,
    "checkbox"
  );

  // span
  elementCreator(`#task-${itemID} > label`, "span", "task_checkbox__input");

  // task name render section
  // ---------------------------------------------------

  // task name div
  elementCreator(`#task-${itemID}`, "div", "task_name");

  // task title p
  elementCreator(
    `#task-${itemID} > .task_name`,
    "p",
    "task_name__title",
    undefined,
    undefined,
    item.getName()
  );

  // task detail p
  elementCreator(
    `#task-${itemID} > .task_name`,
    "p",
    "task_name__description",
    undefined,
    undefined,
    item.getDetail()
  );

  // task star icon render section
  // ---------------------------------------------------

  // star container div
  elementCreator(`#task-${itemID}`, "div", "task_favorite-check");

  // star button
  elementCreator(`#task-${itemID} > .task_favorite-check`, "button");

  // star icon img
  const stat = item.getPriority();
  let icon = "";
  if (stat === "high") {
    icon = "../src/icons/star_blue.png";
  } else {
    icon = "../src/icons/star_empty.png";
  }
  elementCreator(
    `#task-${itemID} > .task_favorite-check > button`,
    "img",
    undefined,
    undefined,
    undefined,
    undefined,
    icon,
    "favorite-check"
  );

  // task date render section
  // ---------------------------------------------------

  // date container div
  if (!(item.getDueDate() === "")) {
    elementCreator(`#task-${itemID}`, "div", "task_date");

    // date button
    elementCreator(
      `#task-${itemID} > .task_date`,
      "button",
      undefined,
      undefined,
      undefined,
      `${item.getDueDate()}`
    );
  }
};

export { clearScreen, renderElements };