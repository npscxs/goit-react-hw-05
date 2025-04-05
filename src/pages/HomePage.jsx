import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import { fetchTrendingMovies } from "../api/apiServer";

import Error from "../components/error/Error";
import MovieList from "../components/moviesList/MoviesList";

export default function HomePage() {
  const [trandingMovies, setTrandingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const getTrandingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrandingMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getTrandingMovies();
  }, []);

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
      {trandingMovies && <MovieList movies={trandingMovies} />}
    </>
  );
}
