export const categorySlider = () => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const categorySlides = document.querySelector('.category_slides');
  const categoriesContent = Array.from(
    document.querySelectorAll('.category_slide')
  );
  let num = 0;

  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', () => {
      categorySlides.style.transform = `translateX(${
        i * -window.innerWidth
      }px)`;
      num = i;
    });
  }

  window.addEventListener('resize', () => {
    categorySlides.style.transform = `translateX(${
      num * -window.innerWidth
    }px)`;
  });
};

export const categoryActive = (e) => {
  const active = document.querySelector('.category_active');
  if (active) {
    active.style.width = `${e.target.offsetWidth}px`;
    active.style.marginLeft = `${
      e.target.getBoundingClientRect().left + window.pageXOffset
    }px`;
  }
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

export const activeStyling = (num) => {
  const categories = Array.from(document.querySelectorAll('.category'));
  if (categories[num]) {
    return {
      width: categories[num].offsetWidth + 'px',
      marginLeft: categories[num].getBoundingClientRect().left + 'px',
    };
  } else {
    const categories = Array.from(document.querySelectorAll('.category'));
    return {
      width: '100px',
    };
  }
};

export const componentMountActive = (num) => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const active = document.querySelector('.category_active');
  active.style.width = `${categories[num].offsetWidth}px`;
  active.style.marginLeft = `${
    categories[num].getBoundingClientRect().left + window.pageXOffset
  }px`;
};
