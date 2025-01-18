//app/components/atoms/Button/Button.tsx
'use client';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: () => void; // Make onClick optional
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; // Add type prop
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;