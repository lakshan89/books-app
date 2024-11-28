export interface Book {
  id: number;
  title?: string;
  author?: string;
  year?: number;
  category?: BookCategory;
  lastUpdated?: string;
  description?: string;
}

export enum BookCategory {
  Dystopian = 'Dystopian',
  Philosophical = 'Philosophical',
  PhilosophicalFiction = 'Philosophical Fiction',
  Fantasy = 'Fantasy',
  ComingOfAge = 'Coming-of-Age',
  Adventure = 'Adventure',
  Romance = 'Romance',
  Fiction = 'Fiction',
}
