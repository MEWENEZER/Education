// Создайте раскрывающийся блок (accordion).
// Сверху блок с заголовком, при нажатии на который снизу показывается блок с текстом,
// при повторном нажатии блок с текстом скрывается.

const initAccordion = (element) => {
  const panel = element.querySelector('.panel');
  const header = element.querySelector('.header');

  header.addEventListener('click', () => {
    panel.classList.toggle('hide');
  });
};

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(initAccordion);
