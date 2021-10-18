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

const slider = {
  currentBackgroundIndex: 0,
  backgrounds: ["back.jpg", "back2.jpg", "back3.jpg", "Back4.jpg"], // .jpg!!!
  getNextBackgroundIndex: function () {
    return this.currentBackgroundIndex + 1 >= this.backgrounds.length
      ? 0
      : this.currentBackgroundIndex + 1;
  },
  nextImage: function () {
    const currentBackground = document.querySelector(
      ".section_slider .current_background"
    );
    const nextBackground = document.querySelector(
      ".section_slider .next_background"
    );
    nextBackground.style.transition = "1s";
    nextBackground.style.left = "0";
    currentBackground.style.transition = "1s";
    currentBackground.style.left = "-100%";
    this.currentBackgroundIndex = this.getNextBackgroundIndex();
    this.setupAfterImageChange();
  },
  setupAfterImageChange: function () {
    // 1. Zmienić pozycję obrazków - pozycja wyjściowa
    // 2. Przez zmianę pozycji take zmianę backgroundu, aby uytkownik juz nie zobaczył tej zmiany
    const currentBackground = document.querySelector(
      ".section_slider .current_background"
    );
    const nextBackground = document.querySelector(
      ".section_slider .next_background"
    );
    currentBackground.style.backgroundColor =
      this.backgrounds[this.currentBackgroundIndex];
    currentBackground.style.left = "0";
    nextBackground.style.left = "100%";
    nextBackground.style.backgroundColor =
      this.backgrounds[this.getNextBackgroundIndex()];
  },
};

setInterval(function () {
  slider.nextImage();
}, 1500);
