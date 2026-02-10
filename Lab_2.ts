type LibraryItemType = 'book' | 'journal' | 'shop';

abstract class LibraryItem {
  abstract issue(): void;
}

interface Reservable {
  reserve(): void;
}

class Book extends LibraryItem implements Reservable {
  #author: string;

  constructor(author: string) {
    super();
    this.#author = author;
  }

  issue() { console.log(`Выдана книга: ${this.#author}`); }
  reserve() { console.log(`Зарезервирована книга: ${this.#author}`); }
}

class Journal extends LibraryItem implements Reservable {
  #author: string;

  constructor(author: string) {
    super();
    this.#author = author;
  }

  issue() { console.log(`Выдан журнал: ${this.#author}`); }
  reserve() { console.log(`Зарезервирован журнал: ${this.#author}`); }
}

class Shop extends LibraryItem implements Reservable {
  #author: string;

  constructor(author: string) {
    super();
    this.#author = author;
  }

  issue() { console.log(`Выдан в магазине: ${this.#author}`); } // Исправлено название предмета
  reserve() { console.log(`Добавлен в магазин: ${this.#author}`); } // Реализация обязательного метода reserve()
}

const book = new Book('Гарри Поттер');
book.reserve(); // Зарезервирована книга: Гарри Поттер
book.issue();   // Выдана книга: Гарри Поттер

const journal = new Journal('National Geographic');
journal.reserve(); // Зарезервирован журнал: National Geographic
journal.issue();   // Выдан журнал: National Geographic

const shop = new Shop('Книги мира');
shop.reserve(); // Зарезервирован журнал: Книги мира
shop.issue();   // Выдан журнал: Книги мира