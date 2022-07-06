const categories = Array.from(document.querySelectorAll('.category'));

let currentTranslate = 0,
  prevTranslate = 0,
  currentIndex = 0;

categories.map((category) => {
  category.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      setPositionByIndex();
    }
  });
});

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
