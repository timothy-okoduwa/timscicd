const carouselSlider = document.querySelector(".carousel_slider");
const carouselImages = document.querySelectorAll(".carousel_slider img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;

  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlider.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  }
});
