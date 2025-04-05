import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { fetchSearchMovie } from "../api/apiServer";
import MovieList from "../components/movieList/MovieList";
import Input from "../components/input/Input";
import Error from "../components/error/Error";

export default function MoviesPage() {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSupmit = (query) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("query", query);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (query === "") return;

    setIsLoading(true);
    setError(null);
    const getTrandingMovies = async () => {
      try {
        const data = await fetchSearchMovie(query);
        setSearchingMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    query !== "" && getTrandingMovies();
  }, [query]);

  return (
    <>
      <Input onSubmit={handleSupmit} />
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
      {searchingMovies &&
        (searchingMovies.length > 0 ? (
          <MovieList movies={searchingMovies} />
        ) : (
          <p>Not Found movies...</p>
        ))}
    </>
  );
}
