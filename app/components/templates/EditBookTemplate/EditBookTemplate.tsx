// app/components/templates/EditBookTemplate/EditBookTemplate.tsx
// app/components/templates/EditBookTemplate/EditBookTemplate.tsx
'use client';
import React from 'react';
import MainTemplate from '@/components/templates/MainTemplate/MainTemplate';
import EditBook from '@/components/pages/EditBook/EditBook'; // Corrected path
import styles from './EditBookTemplate.module.scss'; // Corrected path

const EditBookTemplate: React.FC = () => {
  return (
    <MainTemplate>
      <div className={styles.editBookTemplate}>
        <h2 className={styles.heading}>Edit Book</h2>
        <EditBook
          id="example-id"
          initialTitle="Example Title"
          initialAuthor="Example Author"
          onClose={() => console.log('Edit book modal closed')}
        />
      </div>
    </MainTemplate>
  );
};

export default EditBookTemplate;