//app/pages/AddBook/AddBook.tsx
'use client'; // Ensure this is a Client Component
import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import BookForm from '../../molecules/BookForm/BookForm';
import styles from './AddBook.module.scss';
import { useDispatch } from 'react-redux';
import { addBook } from '@/store/slices/booksSlice';

const AddBook: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddBook = (title: string, author: string) => {
    dispatch(addBook({ title, author }));
  };

  return (
    <MainTemplate>
      <div className={styles.addBook}>
        <h2>Add a New Book</h2>
        <BookForm onSubmit={handleAddBook} />
      </div>
    </MainTemplate>
  );
};

export default AddBook;
