import styles from "./BookCard.module.scss";

function BookCard(props) {
  const book = props.book.volumeInfo;

  // some books don't have an image so we use a placeholder
  let image = "https://placehold.co/128x195?text=No+Cover";
  if (book.imageLinks) {
    image = book.imageLinks.thumbnail;
  }

  // authors is an array so we join it into one string
  let authors = "Unknown author";
  if (book.authors) {
    authors = book.authors.join(", ");
  }

  let description = "No description available.";
  if (book.description) {
    description = book.description.slice(0, 100) + "...";
  }

  return (
    <article
      className={styles.card}
      onClick={() => props.onBookClick(props.book)}
    >
      <img src={image} alt={book.title} />
      <h3>{book.title}</h3>
      <p className={styles.authors}>{authors}</p>
      <p>{description}</p>
    </article>
  );
}

export default BookCard;
