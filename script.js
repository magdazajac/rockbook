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
  backgrounds: ["back.jpg", "back2.jpg", "back3.jpg", "Back4.jpg"],
  getBackground: {
    current: function () {
      this.instances.current =
        this.instances.current ??
        document.querySelector(".section_slider .current_background");
      return this.instances.current;
    },
    next: function () {
      this.instances.next =
        this.instances.next ??
        document.querySelector(".section_slider .next_background");
      return this.instances.next;
    },
    instances: {
      current: null,
      next: null,
    },
  },
  getNextBackgroundIndex: function () {
    return this.currentBackgroundIndex + 1 >= this.backgrounds.length
      ? 0
      : this.currentBackgroundIndex + 1;
  },
  nextImage: function () {
    const currentBackground = this.getBackground.current();
    const nextBackground = this.getBackground.next();
    nextBackground.classList.add("slide_in");
    this.currentBackgroundIndex = this.getNextBackgroundIndex();
    const self = this;
    nextBackground.addEventListener("animationend", function () {
      self.setupAfterImageChange();
    });
  },
  setupAfterImageChange: function () {
    const currentBackground = this.getBackground.current();
    const nextBackground = this.getBackground.next();
    currentBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.currentBackgroundIndex] + '")';
    nextBackground.classList.remove("slide_in");
    nextBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.getNextBackgroundIndex()] + '")';
  },
  dispatch: function () {
    this.setup();
    const self = this;
    setInterval(function () {
      self.nextImage();
    }, 3000);
  },
  setup: function () {
    // metoda ustala początkowe tła
    const currentBackground = this.getBackground.current();
    const nextBackground = this.getBackground.next();
    currentBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.currentBackgroundIndex] + '")';
    nextBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.getNextBackgroundIndex()] + '")';
  },
};

slider.dispatch();
