import { useState } from "react";
import styles from "./SearchForm.module.scss";

function SearchForm(props) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (query !== "") {
      props.onSearch(query);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
