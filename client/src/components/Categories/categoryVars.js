export const categorySlider = () => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const categoryItems = document.querySelector('.category_slides');
  const categoriesContent = Array.from(
    document.querySelectorAll('.category_slide')
  );

  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', () => {
      categoryItems.style.transform = `translateX(-${
        i * categoriesContent[0].clientWidth
      }px)`;
    });
  }
};

export const categoryActive = (e) => {
  const active = document.querySelector('.category_active');
  active.style.width = `${e.target.offsetWidth}px`;
  active.style.marginLeft = `${
    e.target.getBoundingClientRect().left + window.pageXOffset
  }px`;
};

export const categoryResizeActive = (num) => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const active = document.querySelector('.category_active');
  window.addEventListener('resize', () => {
    active.style.width = `${categories[num].offsetWidth}px`;
    active.style.marginLeft = `${
      categories[num].getBoundingClientRect().left + window.pageXOffset
    }px`;
  });
};
