import { BookFormProps, Book } from "../types/types";
import { useRef, FormEvent } from "react";


const BookForm = ({ addBook, editBook, currentBook }: BookFormProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (titleRef.current && authorRef.current && yearRef.current) {
            const newBook: Book = {
              title: titleRef.current.value,
              author: authorRef.current.value,
              year: yearRef.current.value,
            };
            if (currentBook) {
              editBook(newBook);
            } else {
              addBook(newBook);
            }
            titleRef.current.value = '';
            authorRef.current.value = '';
            yearRef.current.value = '';
          }
        };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
      <input
        ref={titleRef}
        placeholder="Title"
        defaultValue={currentBook?.title || ''}
        required
        className="border p-2 w-full"
      />
      <input
        ref={authorRef}
        placeholder="Author"
        defaultValue={currentBook?.author || ''}
        required
        className="border p-2 w-full"
      />
      <input
        ref={yearRef}
        placeholder="Publication Year"
        defaultValue={currentBook?.year || ''}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        {currentBook ? 'Update Book' : 'Add Book'}
      </button>
    </div>
    </form>

    );
}

export default BookForm