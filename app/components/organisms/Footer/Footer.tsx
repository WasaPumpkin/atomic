//app/components/atoms/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Book Management App</p>
    </footer>
  );
};

export default Footer;