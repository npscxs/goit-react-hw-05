import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";
import Navigation from "../navigation/Navigation";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />

      <main>
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
