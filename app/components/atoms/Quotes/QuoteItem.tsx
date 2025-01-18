// src/components/atoms/Quotes/QuoteItem.tsx
import React from "react";
import styles from "./QuoteItem.module.scss";

interface QuoteItemProps {
  quote: string;
  author: string;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote, author }) => {
  return (
    <div className={styles.quoteItem}>
      <blockquote>{quote}</blockquote>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteItem;