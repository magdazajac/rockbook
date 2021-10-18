window.addEventListener("scroll", function () {
  let header = document.querySelector(".top-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector("#hamburger");
const navBar = document.querySelector("#main_nav-bar");

hamburger.addEventListener("click", () => {
  const classList = navBar.classList;
  navBar.classList.toggle("show");
});

const allLis = document.querySelectorAll("ul#main_nav-bar li");
allLis.forEach((li) =>
  li.addEventListener("click", () => {
    const classList = navBar.classList;
    navBar.classList.remove("show");
  })
);

const btnScrollToTop = document.querySelector(".btnScroll");
btnScrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  let hideScroll = document.querySelector(".btnScroll");
  hideScroll.classList.toggle("appear", window.scrollY > 100);
});
