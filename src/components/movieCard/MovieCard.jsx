import React from "react";
import { makeSrcForPoster } from "../../api/apiServer";

import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <img
      src={makeSrcForPoster(movie.poster_path)}
      alt={`Poster of movie ${movie.title} `}
      className={styles.poster}
    />
  );
}
