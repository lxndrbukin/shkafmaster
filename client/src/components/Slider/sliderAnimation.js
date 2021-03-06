export const sliderAnimation = (sliderClassName) => {
  const slider = document.querySelector(`.${sliderClassName}`);
  const btns = Array.from(document.querySelectorAll('.slider-button'));
  slider.classList.add('grab');
  const slides = Array.from(document.querySelectorAll('.slide'));

  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0;

  slides.map((slide, index) => {
    const slideInfo = document.querySelector('.slide-info');
    slideInfo.addEventListener('dragstart', (e) => e.preventDefault());

    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mousemove', touchMove);
    slide.addEventListener('mouseleave', touchEnd);
  });

  window.addEventListener('resize', setPositionByIndex);

  btns[0].classList.add('slider-button_active');

  function sliderInterval() {
    if (currentIndex < btns.length - 1) {
      btns[currentIndex].classList.remove('slider-button_active');
      currentIndex++;
      btns[currentIndex].classList.add('slider-button_active');
    } else if (currentIndex === btns.length - 1) {
      btns[currentIndex].classList.remove('slider-button_active');
      currentIndex = 0;
      btns[currentIndex].classList.add('slider-button_active');
    }
    setPositionByIndex();
  }

  setInterval(sliderInterval, 4000);

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      btns[currentIndex].classList.remove('slider-button_active');
      currentIndex = i;
      btns[i].classList.add('slider-button_active');
      clearInterval(sliderInterval);
      setPositionByIndex();
      // setInterval(sliderInterval, 4000);
    });
  }

  function getPositionX(event) {
    return event.type.includes('mouse')
      ? event.pageX
      : event.touches[0].clientX;
  }

  function touchStart(index) {
    return function (event) {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
      slider.classList.add('grabbing');
    };
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }

  function touchEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
    slider.classList.remove('grabbing');
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
};
