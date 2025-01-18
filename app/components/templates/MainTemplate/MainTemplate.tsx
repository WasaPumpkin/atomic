//app/components/templates/MainTemplate/MainTemplate.tsx
'use client';
// components/templates/MainTemplate/MainTemplate.tsx
import React from 'react';
import styles from './MainTemplate.module.scss';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={styles.mainTemplate}>
      {children}
    </div>
  );
};

export default MainTemplate;