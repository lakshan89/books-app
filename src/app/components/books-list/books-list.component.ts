import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../types/book.type';

@Component({
  selector: 'app-books-list',
  standalone: false,

  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
})
export class BooksListComponent implements OnInit {
  @Input() books$: Observable<Book[]> | undefined;
  @Output() bookId = new EventEmitter<number>();

  constructor() {}
  
  ngOnInit() {}

  onSelect(bookId: number) {
    this.bookId.emit(bookId);
  }
}
