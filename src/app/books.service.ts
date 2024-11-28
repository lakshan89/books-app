import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, of } from 'rxjs';
import { books } from './data/books';
import { Book } from './types/book.type';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksList: Book[] = books;
  private books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(books);
  constructor() {}

  getBooks() {
    return this.books;
  }

  deleteBook(bookId: number) {
    this.booksList = this.booksList.filter((book: Book) => book.id != bookId);
    this.books.next(this.booksList);
  }

  updateBook(bookId: number, book: Book) {
    let index = this.booksList.findIndex((book: Book) => book.id == bookId);
    if (index != -1) this.booksList[index] = book;
    this.books.next(this.booksList);
  }

  getBookById(bookId: number) {
    return this.booksList.find((book: Book) => book.id == bookId);
  }
}
