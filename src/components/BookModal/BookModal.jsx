import styles from "./BookModal.module.scss";

function BookModal(props) {
  const book = props.book.volumeInfo;

  return (
    <div className={styles.overlay} onClick={props.onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={props.onClose}>
          X
        </button>
        <h2>{book.title}</h2>
        {book.authors && <p>By {book.authors.join(", ")}</p>}
        {book.publisher && <p>Publisher: {book.publisher}</p>}
        {book.publishedDate && <p>Published: {book.publishedDate}</p>}
        {book.pageCount && <p>Pages: {book.pageCount}</p>}
        {book.language && <p>Language: {book.language.toUpperCase()}</p>}
        {book.categories && <p>Categories: {book.categories.join(", ")}</p>}
        {book.description && (
          <p className={styles.description}>{book.description}</p>
        )}
      </div>
    </div>
  );
}

export default BookModal;
