
//app/pages/Home/Home.tsx
// app/app/pages/Home/Home.tsx
'use client';
import React, { useState } from 'react';
import MainTemplate from '@/app/components/templates/MainTemplate/MainTemplate';
import SearchBar from '@/app/components/molecules/SearchBar/SearchBar';
import BookList from '@/app/components/organisms/BookList/BookList';
import BookForm from '@/app/components/molecules/BookForm/BookForm';
import styles from './Home.module.scss';
import { useDispatch } from 'react-redux';
import { addBook } from '@/store/slices/booksSlice';
//import Button from '@/components/atoms/Button/Button';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(''); // Add searchTerm state

  const handleAddBook = (title: string, author: string) => {
    dispatch(addBook({ title, author }));
  };

  return (
    <MainTemplate>
      <div className={styles.home}>
        {/* Pass searchTerm and onSearchTermChange to SearchBar */}
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        <div className={styles.buttonContainer}>
          {/* <Button onClick={() => console.log('Button clicked!')}>
            Add Bookdd
          </Button> */}
        </div>
        {/* Always show the form */}
        <BookForm onSubmit={handleAddBook} />
        {/* Pass searchTerm to BookList */}
        <BookList searchTerm={searchTerm} />
      </div>
    </MainTemplate>
  );
};

export default Home;

