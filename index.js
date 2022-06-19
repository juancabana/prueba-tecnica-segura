//Slider Hero
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function move_right() {
  let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function move_left() {
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}
btnRight.addEventListener("click", function () {
  move_right();
});
btnLeft.addEventListener("click", function () {
  move_left();
});

// setInterval(function(){
//     move_right()
// }, 500)



let myButton = document.getElementById("btn-menu");
let ul_navbar = document.getElementById("ul-navbar");


function display_ul_navbar() {
  
  if (ul_navbar.style.display === "none") {
    ul_navbar.style.display = "block";
  } else {
    ul_navbar.style.display = "none";

  }
}