//app/components/atoms/SearchBar/SearchBar.tsx
// src/components/atoms/SearchBar/SearchBar.tsx
'use client';
import React from 'react';
import Input from '@/app/components/atoms/Input/Input';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className={styles.searchBar}>
      <Input
        type="text"
        placeholder="Search books by title or author..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;