const images = document.getElementById("images");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const img = document.querySelectorAll("#images img");

let index = 0;

const nextImage = () => {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  images.style.transform = `translateX(${-index * 500}px)`;
};

const run = () => {
  index++;
  nextImage();
};

let interval = setInterval(run, 2000);

const resetCarousel = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

nextBtn.addEventListener("click", () => {
  index++;
  nextImage();
  resetCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  nextImage();
  resetCarousel();
});
