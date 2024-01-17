import { getInfoForm } from "./tomarInfoForm.js";
import * as variables from "./../variables.js";

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  variables.images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  variables.bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}


variables.inputs.forEach((inp) => {
  inp.addEventListener("focus", () => inp.classList.add("active"));

  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

variables.toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => variables.main.classList.toggle("sign-up-mode"));
});

variables.bullets.forEach((bullet) => bullet.addEventListener("click", moveSlider));

getInfoForm();