import BookCard from "../BookCard/BookCard";
import styles from "./BookGrid.module.scss";
function BookGrid(props) {
  return (
    <section className={styles.grid}>
      {props.books.map((book) => (
        <BookCard key={book.id} book={book} onBookClick={props.onBookClick} />
      ))}
    </section>
  );
}

export default BookGrid;
