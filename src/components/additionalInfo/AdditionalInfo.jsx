import { Link } from "react-router-dom";

import styles from "./AdditionalInfo.module.css";

export default function AdditionalInfo() {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Additional information</h4>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="cast" className={styles.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={styles.link}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
