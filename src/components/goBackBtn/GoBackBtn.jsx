import styles from "./GoBackBtn.module.css";
import { Link } from "react-router-dom";

export default function GoBackBtn({ path }) {
  return (
    <Link to={path ?? "/movies"} className={styles.button}>
      Go Back
    </Link>
  );
}
