//app/pages/EditBook/EditBook.tsx
'use client';
import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import BookForm from '../../molecules/BookForm/BookForm';
import styles from './EditBook.module.scss';
import { useDispatch } from 'react-redux';
import { editBook } from '@/store/slices/booksSlice';

interface EditBookProps {
  id: string;
  initialTitle: string;
  initialAuthor: string;
  onClose: () => void;
}

const EditBook: React.FC<EditBookProps> = ({ id, initialTitle, initialAuthor, onClose }) => {
  const dispatch = useDispatch();
  const [title] = useState(initialTitle);
  const [author] = useState(initialAuthor);

  const handleSubmit = (title: string, author: string) => {
    dispatch(editBook({ id, title, author }));
    onClose();
  };

  return (
    <MainTemplate>
      <div className={styles.editBook}>
        <h2>Edit Book</h2>
        <BookForm
          onSubmit={handleSubmit}
          initialTitle={title}
          initialAuthor={author}
        />
      </div>
    </MainTemplate>
  );
};

export default EditBook;