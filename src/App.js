import { OnLoading } from 'Components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./Components/HomePage/HomePage' /*webpackChankName: 'home-page'*/),
);

const MoviesPage = lazy(() =>
  import('./Components/MoviesPage/MoviesPage' /*webpackChankName: 'movies-page'*/),
);

const MovieDetails = lazy(() =>
  import(
    './Components/MovieDetailsPage/MovieDetailsPage' /*webpackChankName: 'movie-details-page'*/
  ),
);

const NotFoundPage = lazy(() =>
  import('./Components/NotFoundPage/NotFoundPage' /*webpackChankName: 'not-found-page'*/),
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<OnLoading />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
            <ToastContainer />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
