//app/components/atoms/Header/Header.tsx
// app/components/organisms/Header.tsx
"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.homeLink}>
        <h1>Book Management App</h1>
      </Link>
      <nav>
        <Link href="/quotes" className={styles.link}>
          Quotes
        </Link>
      </nav>
    </header>
  );
};

export default Header;

