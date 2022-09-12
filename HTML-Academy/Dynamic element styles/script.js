/*

1. + Все «пиксели» имеют класс pixel.
2. + Выпадающий список с цветами имеет класс chosen-color.
3. + «Ластик» — это чекбокс с классом eraser.
4. + Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. + Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. + Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/

let pixels = document.querySelectorAll('.pixel');
let colorSetting = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');

let color = colorSetting.value;

colorSetting.onchange = () => {
  color = colorSetting.value;
  return color;
};

for (let pixel of pixels) {
  pixel.onclick = () => {
    if (eraser.checked) {
      pixel.style.backgroundColor = 'white';
    } else {
      pixel.style.backgroundColor = color;
    }
  };
}
