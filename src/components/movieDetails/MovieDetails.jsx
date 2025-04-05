import { makeSrcForPoster } from "../../api/apiServer";

import styles from "./MovieDetails.module.css";

const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export default function MovieDetails({ movie }) {
  return (
    <div className={styles.wrapper}>
      <img
        src={makeSrcForPoster(movie.poster_path)}
        alt={`Poster of movie ${movie.title} `}
        className={styles.poster}
      />
      <div className={styles.textWrapper}>
        <h2>
          {movie.title} ({getYear(movie.release_date)})
        </h2>
        <p>User Scope: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((el) => el.name).join(", ")}</p>
      </div>
    </div>
  );
}
