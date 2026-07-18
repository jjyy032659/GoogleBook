import { useState } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import BookGrid from "./components/BookGrid/BookGrid";
import BookModal from "./components/BookModal/BookModal";
import { searchBooks } from "./api/booksApi";

function App() {
  const [books, setBooks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  async function handleSearch(query) {
    const results = await searchBooks(query);
    setBooks(results);
    setHasSearched(true);
  }

  return (
    <div>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {hasSearched && books.length === 0 && (
        <p>No books found, try another search!</p>
      )}
      <BookGrid books={books} onBookClick={setSelectedBook} />
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default App;
