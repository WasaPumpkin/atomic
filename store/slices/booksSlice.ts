// store/slices/booksSlice.ts
// store/slices/booksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Book, BooksState } from '@/store/types';
import { RootState } from '@/store/store'; // Import RootState

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<{ title: string; author: string }>) => {
      const newBook: Book = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action: PayloadAction<{ id: string; title: string; author: string }>) => {
      const { id, title, author } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.title = title;
        book.author = author;
      }
    },
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;

// Update selectors to use RootState
export const selectBooks = (state: RootState) => state.books.books;
export const selectBookById = (state: RootState, id: string) =>
  state.books.books.find((book) => book.id === id);

export const booksReducer = booksSlice.reducer;

// // store/booksSlice.ts
// // store/booksSlice.ts
// // store/booksSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { Book, BooksState } from '@/store/types'; // Ensure these types are defined correctly

// const initialState: BooksState = {
//   books: [],
// };

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action: PayloadAction<{ title: string; author: string }>) => {
//       const newBook: Book = {
//         id: nanoid(),
//         title: action.payload.title,
//         author: action.payload.author,
//       };
//       state.books.push(newBook);
//     },
//     removeBook: (state, action: PayloadAction<string>) => {
//       state.books = state.books.filter((book) => book.id !== action.payload);
//     },
//     editBook: (state, action: PayloadAction<{ id: string; title: string; author: string }>) => {
//       const { id, title, author } = action.payload;
//       const book = state.books.find((book) => book.id === id);
//       if (book) {
//         book.title = title;
//         book.author = author;
//       }
//     },
//   },
// });

// // Export actions
// export const { addBook, removeBook, editBook } = booksSlice.actions;

// // Define and export selectors
// export const selectBooks = (state: BooksState) => state.books;
// export const selectBookById = (state: BooksState, id: string) =>
//   state.books.find((book) => book.id === id);

// // Export the reducer
// export const booksReducer = booksSlice.reducer;