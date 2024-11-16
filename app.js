const left = document.getElementById("left");
const right = document.getElementById("right");
const heroImg = document.getElementById("hero");

const heroimgVariable = {
  one: "./images/desktop-image-hero-1.jpg",
  two: "./images/desktop-image-hero-2.jpg",
  three: "./images/desktop-image-hero-3.jpg",
};

let count = 0;
function incrementCount() {
  count++;
  if (count > 2) count = 0;
}
function decrementCount() {
  count--;
  if (count < 0) {
    count = 2;
  }
}
function updateHeroImage() {
  if (count === 0) {
    heroImg.setAttribute("src", heroimgVariable.one);
  } else if (count === 1) {
    heroImg.setAttribute("src", heroimgVariable.two);
  } else if (count === 2) {
    heroImg.setAttribute("src", heroimgVariable.three);
  }
}

right.addEventListener("click", () => {
  incrementCount();
  updateHeroImage();
});
left.addEventListener("click", () => {
  decrementCount();
  updateHeroImage();
});

function handleResize() {
  if (window.innerWidth < 450) {
    heroimgVariable.one = "./images/mobile-image-hero-1.jpg";
    heroimgVariable.two = "./images/mobile-image-hero-2.jpg";
    heroimgVariable.three = "./images/mobile-image-hero-3.jpg";
  }
}
window.addEventListener("resize", handleResize);
handleResize();

/////////////menu////////////

const menuBar = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const menuList = document.querySelector("#menuList");

menuBar.addEventListener("click", () => {
  menuList.classList.add("active");
  document.body.classList.add("active");
});
close.addEventListener("click", () => {
  menuList.classList.remove("active");

  document.body.classList.remove("active");
});
