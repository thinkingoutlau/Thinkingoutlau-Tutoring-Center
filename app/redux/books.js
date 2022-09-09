import axios from "axios";

const FETCH_BOOKS = "FETCH_BOOKS";

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  FETCH_BOOKS,
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
