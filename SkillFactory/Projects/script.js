divlet images = [
  {
    url: 'https://images.unsplash.com/photo-1663123878899-065f74376300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    title: 'Honolulu Palms',
  },
  {
    url: 'https://images.unsplash.com/photo-1661949807600-990fe8efd74f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'After the rain',
  },
  {
    url: 'https://images.unsplash.com/photo-1657279597871-8b5ded5f9778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80',
    title: 'Arts & Culture',
  },
  {
    url: 'https://images.unsplash.com/photo-1623251609314-97cc1f84e3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Business & Work',
  },
  {
    url: 'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Street Style',
  },
];

function initSlider() {
  // проверка на пустоту массива с Фото
  if (images || !images.length) return;

  let sliderImages = document.querySelector('.slider__images');
  let sliderArrows = document.querySelector('.slider__arrows');

  initImages();
  initArrows();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = createElement('div');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});
