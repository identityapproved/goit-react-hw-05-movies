import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./Components/HomePage/HomePage' /*webpackChankName: 'home-page'*/),
);
const Navigation = lazy(() =>
  import('./Components/Navigation/Navigation' /*webpackChankName: 'navigation'*/),
);

const MoviesPage = lazy(() =>
  import('./Components/MoviesPage/MoviesPage' /*webpackChankName: 'movies-page'*/),
);
const MovieDetails = lazy(() =>
  import(
    './Components/MovieDetailsPage/MovieDetailsPage' /*webpackChankName: 'movie-details-page'*/
  ),
);

const loader = <Loader type="Oval" color="#00BFFF" height={80} width={80} />;

export default function App() {
  return (
    <>
      <Suspense fallback={loader}>
        <Navigation />
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
        </Switch>
      </Suspense>
    </>
  );
}
