let pictures = ['Rectangle8.png', 'Rectangle9.png', 'Rectangle10.png'];

let thumbnails = document.querySelectorAll('.gallery__picture-preview');
let fullPhoto = document.querySelector('.full-picture');

let clicker = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (let i = 0; i < pictures.length; i++) {
  clicker(thumbnails[i], pictures[i]);
}

/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и 
большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. 
Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. 
Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
