// app/components/organisms/EditBook/EditBook.tsx
'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '@/store/slices/booksSlice';
import styles from './EditBook.module.scss';

interface EditBookProps {
  id: string;
  initialTitle: string;
  initialAuthor: string;
  onClose: () => void;
}

const EditBook: React.FC<EditBookProps> = ({ id, initialTitle, initialAuthor, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editBook({ id, title, author }));
    onClose();
  };

  return (
    <div className={styles.editBookModal}>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} className={styles.editBookForm}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter book author"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
        <button type="button" onClick={onClose} className={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditBook;