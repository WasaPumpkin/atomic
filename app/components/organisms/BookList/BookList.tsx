//app/components/organisms/BookList/BookList.tsx
// app/components/organisms/BookList/BookList.tsx
// app/components/organisms/BookList/BookList.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, removeBook } from '@/store/slices/booksSlice';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import styles from './BookList.module.scss';
import Button from '@/app/components/atoms/Button/Button';

interface BookListProps {
  searchTerm: string; // Add searchTerm as a prop
}

const BookList: React.FC<BookListProps> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleDelete = (id: string) => {
    dispatch(removeBook(id));
  };

  const handleEdit = (id: string) => {
    router.push(`/edit-book/${id}`); // Use router.push for navigation
  };

  if (!hydrated) {
    return null; // Prevents rendering on the server
  }

  // Filter books based on the search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.bookList}>
      {filteredBooks.map((book) => (
        <div key={book.id} className={styles.bookItem}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <div className={styles.actions}>
            <Button onClick={() => handleDelete(book.id)}>Delete</Button>
            <Button onClick={() => handleEdit(book.id)}>Edit</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;