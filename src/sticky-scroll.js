let navBarPosition = 0;
let oldScrollY = 0;
const header = document.querySelector(".header");
const nav = document.querySelector(".nav-bar");
const main = document.querySelector(".main");
const headerHeight = header.offsetHeight;
const sticky = nav.offsetTop;

main.style.paddingTop = `${headerHeight}px`;
header.style.position = "fixed";
header.style.width = "100%";

export default function stickyScrollHeader() {
  const currentScrollY = window.scrollY;
  const scrollAmount = currentScrollY - oldScrollY;

  navBarPosition += scrollAmount;
  navBarPosition = Math.max(0, Math.min(sticky, navBarPosition));
  oldScrollY = currentScrollY;

  header.style.top = `-${navBarPosition}px`;
}