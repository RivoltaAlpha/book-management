export interface Book {
    title: string;
    author: string;
    year: string;
  }
  
 export interface BookFormProps {
    addBook: (book: Book) => void;
    editBook: (book: Book) => void;
    currentBook: Book | null;
  }

  export interface BookTableProps {
    books: Book[];
    editBook: (book: Book) => void;
    deleteBook: (book: Book) => void;
  }