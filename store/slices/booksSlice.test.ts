// store/slices/booksSlice.test.ts
import { booksReducer, addBook, removeBook, editBook } from "./booksSlice";
import { nanoid } from "nanoid";

// Mock nanoid to return a predictable value for testing
jest.mock("nanoid", () => ({ nanoid: jest.fn() }));

describe("booksSlice", () => {
  test("should return the initial state", () => {
    const initialState = booksReducer(undefined, { type: "@@INIT" });
    expect(initialState).toEqual({ books: [] });
  });

  test("should add a new book", () => {
    (nanoid as jest.Mock).mockReturnValue("123"); // Mock nanoid to return '123'
    const initialState = { books: [] };
    const action = addBook({ title: "Test Book", author: "Test Author" });
    const newState = booksReducer(initialState, action);

    expect(newState.books).toHaveLength(1);
    expect(newState.books[0]).toEqual({
      id: "123",
      title: "Test Book",
      author: "Test Author",
    });
  });

  test("should remove a book by ID", () => {
    const initialState = {
      books: [
        { id: "123", title: "Book 1", author: "Author 1" },
        { id: "456", title: "Book 2", author: "Author 2" },
      ],
    };
    const action = removeBook("123");
    const newState = booksReducer(initialState, action);

    expect(newState.books).toHaveLength(1);
    expect(newState.books[0].id).toBe("456");
  });

  test("should edit a book by ID", () => {
    const initialState = {
      books: [{ id: "123", title: "Old Title", author: "Old Author" }],
    };
    const action = editBook({
      id: "123",
      title: "New Title",
      author: "New Author",
    });
    const newState = booksReducer(initialState, action);

    expect(newState.books[0]).toEqual({
      id: "123",
      title: "New Title",
      author: "New Author",
    });
  });
});
