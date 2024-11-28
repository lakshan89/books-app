import { Book, BookCategory } from '../types/book.type';
export const books: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    category: BookCategory.Fiction,
    lastUpdated: '28-12-2024',
    description:
      'A novel set in the Great Depression, focusing on issues of race, injustice, and morality in the American South.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    category: BookCategory.Dystopian,
    lastUpdated: '28-12-2024',
    description:
      'A chilling depiction of a totalitarian regime and the surveillance state, emphasizing the dangers of oppressive governments.',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    category: BookCategory.Romance,
    lastUpdated: '28-12-2024',
    description:
      'A classic tale of love, societal expectations, and family dynamics in 19th-century England.',
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    category: BookCategory.Fiction,
    lastUpdated: '28-12-2024',
    description:
      'An exploration of the American Dream, wealth, and disillusionment in the Jazz Age.',
  },
  {
    id: 5,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    category: BookCategory.Adventure,
    lastUpdated: '28-12-2024',
    description:
      "An epic tale of obsession and revenge, following Captain Ahab's pursuit of the white whale, Moby-Dick.",
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    category: BookCategory.ComingOfAge,
    lastUpdated: '28-12-2024',
    description:
      'A story of teenage alienation and rebellion, narrated by the iconic Holden Caulfield.',
  },
  {
    id: 7,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    category: BookCategory.Fantasy,
    lastUpdated: '28-12-2024',
    description:
      'A fantastical journey of Bilbo Baggins as he sets out on an epic adventure to reclaim treasure from a dragon.',
  },
  {
    id: 8,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    category: BookCategory.PhilosophicalFiction,

    lastUpdated: '28-12-2024',
    description:
      'An intense psychological drama exploring morality, guilt, and redemption in 19th-century Russia.',
  },
  {
    id: 9,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    category: BookCategory.Philosophical,
    lastUpdated: '28-12-2024',
    description:
      "A philosophical novel about pursuing one's dreams and listening to the heart's desires.",
  },
  {
    id: 10,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    category: BookCategory.Dystopian,
    lastUpdated: '28-12-2024',
    description:
      'A critique of a technologically advanced and dehumanized society that prioritizes comfort over individuality.',
  },
];
