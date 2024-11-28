export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  category: BookCategory;
  lastUpdated: string;
  description: string;
}

export enum BookCategory {
  'Dystopian',
  'Philosophical',
  'Philosophical Fiction',
  'Fantasy',
  'Coming-of-Age',
  'Adventure',
  'Romance',
  'Fiction'
}
