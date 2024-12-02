import { Component } from '@angular/core';
import { BooksService } from '../../books.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { Book, BookCategory } from '../../types/book.type';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-manage',
  standalone: false,

  templateUrl: './books-manage.component.html',
  styleUrl: './books-manage.component.css',
})
export class BooksManageComponent {
  selectedBook$: Observable<Book | undefined>;
  destroy$ = new Subject<boolean>();
  selectedId: string = '';
  categoryOptions: string[] = [];
  constructor(
    private _booksService: BooksService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.selectedBook$ = of(undefined);
  }

  bookManageForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    year: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    author: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastUpdated: new FormControl(''),
  });

  ngOnInit() {
    this.categoryOptions = Object.keys(BookCategory);

    this._activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.selectedId = params['id'];
        let selectedBook: Book | undefined = this._booksService.getBookById(
          +this.selectedId
        );
        if (selectedBook) {
          this.setFormValue(selectedBook);
        } else {
          // create
          this.setFormValue({
            id: 0,
            title: '',
            author: '',
            year: 0,
            description: '',
            category: undefined,
            lastUpdated: '',
          });
        }
      });
  }

  setFormValue(book: Book) {
    this.bookManageForm.patchValue({
      title: book.title,
      author: book.author,
      year: book.year,
      description: book.description,
      category: book.category,
      lastUpdated: book.lastUpdated,
    });
  }

  onDelete(bookId: string) {
    this._booksService.deleteBook(+bookId);
    this.bookManageForm.reset();
  }

  onUpdate() {
    if (this.bookManageForm.valid) {
      if (this.selectedId) {
        // On Update
        let updateBook: Book = {
          ...this.bookManageForm.value,
          lastUpdated: new Date().toString(),
          id: +this.selectedId,
          category: BookCategory.Adventure, //TODO: Set the correct category
        };
        this._booksService.updateBook(+this.selectedId, updateBook);
      } else {
        // create
        let updateBook: Book = {
          ...this.bookManageForm.value,
          lastUpdated: new Date().toString(),
          id: +new Date(),
          category: BookCategory.Adventure, //TODO: Set the correct category
        };

        this._booksService.cerateBook(updateBook);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
