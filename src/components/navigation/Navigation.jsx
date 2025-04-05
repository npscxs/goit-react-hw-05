import { NavLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./Navigation.module.css";

const navLinkStyle = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navLinkStyle}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
