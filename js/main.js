const dropdown = document.querySelectorAll(".nav__item-dropdown");
const slides = document.querySelectorAll(".slider__img");
const btnBlock = document.querySelector(".slider__btn-block");
const burgerBtn = document.querySelector(".burger__burger-btn");
const navMenu = document.querySelector(".nav__list");
const openListDropdown = document.querySelectorAll(".nav__list-dropdown, open");

burgerBtn.onclick = function () {
  navMenu.classList.toggle("open");
  burgerBtn.classList.toggle("open");
};
let slideIndex = 0;

for (i = 0; i < dropdown.length; i++) {
  let subMenu = dropdown[i].querySelector(".nav__list-dropdown");
  let link = dropdown[i];

  link.addEventListener("click", function () {
    subMenu.classList.toggle("open");
  });
}

document.body.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.classList.contains("nav__item-dropdown") && openListDropdown) {
    for (i = 0; i < openListDropdown.length; i++) {
      openListDropdown[i].classList.remove("open");
    }
  }
});

for (i = 0; i < slides.length; i++) {
  const sliderBtn = document.createElement("button");
  sliderBtn.classList.add("slider__btn");
  btnBlock.appendChild(sliderBtn);
}

const arrBtn = document.getElementsByClassName("slider__btn");

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    arrBtn[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  arrBtn[slideIndex - 1].classList.add("active");
}
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
btnBlock.onclick = function (e) {
  for (let i = 0; i < arrBtn.length + 1; i++) {
    if (
      e.target.classList.contains("slider__btn") &&
      e.target === arrBtn[i - 1]
    ) {
      currentSlide(i);
    }
  }
};