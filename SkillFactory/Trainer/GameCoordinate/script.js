const random = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const button = document.querySelector('button');
const body = document.querySelector('body');
console.log(body);

button.addEventListener('mouseenter', () => {
  button.style.left = `${random(10, 90)}%`;
  button.style.top = `${random(5, 95)}%`;
});

button.addEventListener('click', () => {
  body.style.backgroundImage = 'url(cats.jpg)';
});
