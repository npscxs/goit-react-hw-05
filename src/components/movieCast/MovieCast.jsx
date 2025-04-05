import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { fetchCastMovieById, makeSrcForPoster } from "../../api/apiServer";
import Error from "../error/Error";

import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const getCast = async () => {
      try {
        const data = await fetchCastMovieById(movieId);
        setCast(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <DotLoader
          color="red"
          cssOverride={{
            margin: "30px auto",
            color: "#007bff",
          }}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {error && <Error />}
      {cast && (
        <ul className={styles.list}>
          {cast.map((el) => (
            <li key={el.id} className={styles.item}>
              <img
                src={makeSrcForPoster(el.profile_path)}
                alt={`Photo by ${el.name}`}
                className={styles.image}
              />
              <p className={styles.text}>
                <b>{el.character}</b>
                <br />
                {el.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
