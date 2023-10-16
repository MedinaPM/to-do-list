const nav = document.querySelector(".nav-bar");
const main = document.querySelector(".main");
const navHeight = nav.offsetHeight;
const sticky = nav.offsetTop;

export default function stickyHeader() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > sticky) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.width = "100%";
    main.style.paddingTop = `${navHeight}px`;
  } else {
    nav.style.position = "static";
    main.style.paddingTop = 0;
    nav.style.width = "auto";
  }
}