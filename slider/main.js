let slider = document.querySelector(".slider");
let sliderPos = 0;
let isMoving = false;

let btnNext = document.querySelector(".btn-next");
let btnPerv = document.querySelector(".btn-prev");

let slides = document.querySelectorAll(".slider-item");
const padding = 10;
let slideWidth = document.querySelector(".slider-item").offsetWidth + padding;
let sliderWidth = slideWidth * slides.length - 10;

let currentSlide = 1;

let firtsSlideClone = slides[0].cloneNode(true);
let lastSlideClone = slides[slides.length - 1].cloneNode(true);
slider.appendChild(firtsSlideClone);
slider.insertBefore(lastSlideClone, slides[0]);

let dotsContainer = document.querySelector(".dots");
slides.forEach((s, i) => {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    if (!isMoving) {
      currentSlide = i + 1;
      setSlide(i + 1);
      setDot(i + 1);
    }
  });
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

sliderMove = (to) => {
  sliderPos += to;
  slider.style.transform = `translate(${-sliderPos}px)`;
  console.log(sliderPos);
};

resetSlider = () => {
  if (sliderPos === sliderWidth + slideWidth) {
    sliderPos = slideWidth - padding;
    slider.style.transform = `translate(${-sliderPos}px)`;
    currentSlide = 1;
  } else if (sliderPos === -padding) {
    console.log("Resetting slider!");
    sliderPos = sliderWidth;
    slider.style.transform = `translate(${-sliderPos}px)`;
    currentSlide = slides.length;
  }
};

setSlide = (slideNum) => {
  console.log(currentSlide);
  isMoving = true;
  let endPos = slideWidth * slideNum - 10;
  let movingDistance = 10;
  let movingSpeed = 2;
  let timer = setInterval(() => {
    if (sliderPos > endPos) {
      sliderMove(-movingDistance);
    } else {
      sliderMove(movingDistance);
    }
    if (sliderPos === endPos) {
      clearInterval(timer);
      resetSlider();
      isMoving = false;
    }
  }, movingSpeed);
};

setDot = (dotNum) => {
  dots.forEach((dot) => {
    dot.classList.remove("checked");
  });

  if (dotNum > slides.length) {
    dots[0].classList.add("checked");
  } else if (dotNum < 1) {
    dots[slides.length - 1].classList.add("checked");
  } else {
    dots[dotNum - 1].classList.add("checked");
  }
};

btnNext.addEventListener("click", () => {
  if (!isMoving) {
    currentSlide++;

    setSlide(currentSlide);
    setDot(currentSlide);
  }
});

btnPerv.addEventListener("click", () => {
  if (!isMoving) {
    currentSlide--;
    setSlide(currentSlide);
    setDot(currentSlide);
  }
});

sliderPos = 800;
setDot(1);
slider.style.transform = `translate(-800px)`;
