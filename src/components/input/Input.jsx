import styles from "./Input.module.css";

export default function Input({ onSubmit }) {
  const heandleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    return query !== "" && onSubmit(query);
  };

  return (
    <form onSubmit={heandleSubmit} className={styles.form}>
      <input type="text" name="query" className={styles.input} />

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
