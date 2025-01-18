// app/edit-book/[id]/page.tsx
// app/edit-book/[id]/page.tsx
// app/edit-book/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, editBook } from '@/store/slices/booksSlice';
import styles from './EditBook.module.scss';

const EditBookPage = () => {
  const router = useRouter();
  const params = useParams(); // Get the dynamic route parameters
  const bookId = params.id; // Extract the book ID from the URL
  const books = useSelector(selectBooks);
  const dispatch = useDispatch(); // Initialize useDispatch
  const [book, setBook] = useState<{ id: string; title: string; author: string } | null>(null);

  useEffect(() => {
    // Find the book by ID
    const selectedBook = books.find((b) => b.id === bookId);
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      // If the book is not found, redirect to the home page or show an error
      router.push('/');
    }
  }, [bookId, books, router]);

  const handleSave = () => {
    if (book) {
      // Dispatch the editBook action to update the book in the Redux store
      dispatch(editBook({ id: book.id, title: book.title, author: book.author }));
      router.push('/'); // Redirect to the home page after saving
    }
  };

  if (!book) {
    return <div>Loading...</div>; // Show a loading state while fetching the book
  }

  return (
    <div className={styles.editBook}>
      <h1>Edit Book</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => router.push('/')}>Cancel</button>
    </div>
  );
};

export default EditBookPage;