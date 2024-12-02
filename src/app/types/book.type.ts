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
  'Philosophical Fiction' = 'Philosophical Fiction',
  Fantasy = 'Fantasy',
  'Coming Of Age' = 'Coming Of Age',
  Adventure = 'Adventure',
  Romance = 'Romance',
  Fiction = 'Fiction',
}
