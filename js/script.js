window.addEventListener("scroll", function () {
  const header = document.querySelector(".top-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector("#hamburger");
const navBar = document.querySelector("#main_nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("show");
});

const listsItems = document.querySelectorAll("ul#main_nav-bar li");
listsItems.forEach((li) =>
  li.addEventListener("click", () => {
    navBar.classList.remove("show");
  })
);

const scrollButton = document.querySelector(".scroll-button");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  let hideScroll = document.querySelector(".scroll-button");
  hideScroll.classList.toggle("appear", window.scrollY > 100);
});

const slider = {
  currentBackgroundIndex: 0,
  backgrounds: [
    "img/back.jpg",
    "img/back2.jpg",
    "img/back3.jpg",
    "img/Back4.jpg",
  ],
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
    // this method sets initial backgrounds
    const currentBackground = this.getBackground.current();
    const nextBackground = this.getBackground.next();
    currentBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.currentBackgroundIndex] + '")';
    nextBackground.style.backgroundImage =
      'url("' + this.backgrounds[this.getNextBackgroundIndex()] + '")';
  },
};

slider.dispatch();
