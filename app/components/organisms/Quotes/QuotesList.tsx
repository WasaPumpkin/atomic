// app/components/organisms/Quotes/QuotesList.tsx
// app/components/organisms/Quotes/QuotesList.tsx
"use client";
import React from "react";
import { useGetQuotesQuery } from "@/store/slices/quotesApiSlice";
import QuoteItem from "@/app/components/atoms/Quotes/QuoteItem";
import styles from "./QuotesList.module.scss"; // Corrected import path

const QuotesList: React.FC = () => {
  const { data, error, isLoading } = useGetQuotesQuery(10);

  console.log("Data:", data); // Log the data
  console.log("Error:", error); // Log the error
  console.log("Loading:", isLoading); // Log the loading state

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error loading quotes.</div>;

  return (
    <div className={styles.quotesList}>
      {data?.quotes.map((quote) => (
        <QuoteItem key={quote.id} quote={quote.quote} author={quote.author} />
      ))}
    </div>
  );
};
export default QuotesList;