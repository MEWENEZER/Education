class Book {
  constructor(name, author, year, price) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;
  }
}

let book = new Book('Преступление и наказание', 'Достоевский Ф.М.', 2016, 135);

console.log(book);

//

class Polygon {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // Метод
  countArea() {
    return this.length * this.width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
  }
}

let square = new Square(4);
console.log(square.countArea());
