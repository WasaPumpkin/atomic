//app/components/molecules/BookForm/BookForm.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import styles from './BookForm.module.scss';

interface BookFormProps {
  onSubmit: (title: string, author: string) => void;
  initialTitle?: string;
  initialAuthor?: string;
}

const BookForm: React.FC<BookFormProps> = ({
  onSubmit,
  initialTitle = '',
  initialAuthor = '',
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    setTitle(initialTitle);
    setAuthor(initialAuthor);
  }, [initialTitle, initialAuthor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError('Please fill in both the title and author fields.');
      return;
    }
    setError(null);
    onSubmit(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookForm}>
      {error && <p className={styles.error}>{error}</p>} {/* Error message */}
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button type="submit">Add Book</Button>
    </form>
  );
};

export default BookForm;
