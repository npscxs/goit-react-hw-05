import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { fetchMovieById } from "../api/apiServer";

import Error from "../components/error/Error";
import MovieDetails from "../components/movieDetails/MovieDetails";
import AdditionalInfo from "../components/additionalInfo/AdditionalInfo";
import GoBackBtn from "../components/goBackBtn/GoBackBtn";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const pathLink = useRef(location.state);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const getMovie = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
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
      {movie && (
        <>
          <GoBackBtn path={pathLink.current} />
          <MovieDetails movie={movie} />
          <AdditionalInfo />

          <Suspense
            fallback={
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
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
