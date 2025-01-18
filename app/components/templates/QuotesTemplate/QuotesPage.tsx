// app/components/templates/Quotes/QuotesPage.tsx
// app/components/templates/Quotes/QuotesPage.tsx
'use client'; // Add this if you're using client-side features like useState
import React, { useState } from 'react';
import MainTemplate from '@/app/components/templates/MainTemplate/MainTemplate';
import { useGetQuotesQuery } from '@/store/slices/quotesApiSlice';
import styles from './QuotesPage.module.scss';

const options = [5, 10, 20, 30];

const Quotes: React.FC = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10);

  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetQuotesQuery(numberOfQuotes);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Quotes</h1>
        <h3 className={styles.subtitle}>Select the Quantity of Quotes to Fetch:</h3>
        <select
          className={styles.select}
          value={numberOfQuotes}
          onChange={(e) => {
            setNumberOfQuotes(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.quotes.map(({ author, quote, id }) => (
          <blockquote key={id} className={styles.quote}>
            &ldquo;{quote}&rdquo;
            <footer className={styles.author}>
              <cite>{author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};

const QuotesPage: React.FC = () => {
  return (
    <MainTemplate>
      <Quotes />
    </MainTemplate>
  );
};

export default QuotesPage;