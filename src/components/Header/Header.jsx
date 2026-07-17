import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Book Finder</h1>
      <p>Search for any book using the Google Books library</p>
    </header>
  );
}

export default Header;
