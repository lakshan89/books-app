import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { filter, map, Observable } from 'rxjs';
import { Book, BookCategory } from './types/book.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  categoryOptions: string[] = [];
  constructor(private _booksService: BooksService, private _router: Router) {}
  books$: Observable<Book[]> | undefined;
  categoryFilter: string = '';

  ngOnInit() {
    this.books$ = this._booksService.getBooks();
    this.categoryOptions = Object.keys(BookCategory);
  }

  onFilterChange() {
    this.books$ = this._booksService.getBooks().pipe(
      map((books) => {
        return books.filter((book) => book.category == this.categoryFilter);
      })
    );
  }

  onBookSelect(bookId: number) {
    this._router.navigate(['view', bookId]);
  }
}
