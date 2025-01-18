// store/store.ts
// store/store.ts
// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@/store/storage'; // Custom storage engine
import { booksReducer } from '@/store/slices/booksSlice'; // Correct import for booksReducer
import { quotesApiSlice } from '@/store/slices/quotesApiSlice'; // Import the quotesApiSlice

// Persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Use the custom storage engine
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, booksReducer);

// Configure the store with the persisted reducer and quotesApiSlice
export const store = configureStore({
  reducer: {
    books: persistedReducer, // Use the persisted reducer
    [quotesApiSlice.reducerPath]: quotesApiSlice.reducer, // Add the quotesApiSlice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializable check
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(quotesApiSlice.middleware), // Add the quotesApiSlice middleware
});

// Create a persistor
export const persistor = persistStore(store);

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// // Default export of the store
// export default store;
// store/store.ts
// store/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from '@/store/storage'; // Custom storage engine
// import { booksReducer } from '@/store/slices/booksSlice'; // Correct import for booksReducer

// // Persist configuration
// const persistConfig = {
//   key: 'root', // Key for the persisted state
//   storage, // Use the custom storage engine
// };

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, booksReducer);

// // Configure the store with the persisted reducer
// export const store = configureStore({
//   reducer: {
//     books: persistedReducer, // Use the persisted reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types for serializable check
//         ignoredActions: ['persist/PERSIST'],
//       },
//     }),
// });

// // Create a persistor
// export const persistor = persistStore(store);

// // Define types for RootState and AppDispatch
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Default export of the store
// export default store;
