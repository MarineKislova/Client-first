//slider
function slider({
  lineSelector,
  wrapperSelector,
  itemSelector,
  arrowNextSelector,
  arrowPrevSelector,
}) {
  let count = 0;
  let width;
  let height;
  const sliderLine = document.querySelector(lineSelector);
  const wrapper = document.querySelector(wrapperSelector);
  const slides = document.querySelectorAll(itemSelector);
  // const width = window.getComputedStyle(wrapper).width;
  const arrowNext = document.querySelector(arrowNextSelector);
  const arrowPrev = document.querySelector(arrowPrevSelector);

  function initResize() {
    width = wrapper.offsetWidth;
    sliderLine.style.width = width * slides.length + "px";
    // wrapper.style.maxHeight = 100 +"%";
    wrapper.style.overflow = "hidden";
    slides.forEach((item) => {
      item.style.width = width + "px";
      // item.style.height = "auto";
      // item.style.height = 100 +"%";
    });

    rollSlider();
  }

  window.addEventListener("resize", initResize);

  initResize();

  function rollSlider() {
    sliderLine.style.transform = `translateX(-${width * count}px)`;
  }

  arrowNext.addEventListener("click", () => {
    count++;
    if (count >= slides.length) {
      count = 0;
    }
    rollSlider();
  });

  arrowPrev.addEventListener("click", () => {
    count--;
    if (count <= 0) {
      count = slides.length - 1;
    }
    rollSlider();
  });
}

export default slider;
