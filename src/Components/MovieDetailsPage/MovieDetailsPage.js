import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
import { fetchMovieDetails } from 'Services/moviesAPI';
import { Suspense, useEffect, useState, lazy } from 'react';
import {
  MovieThumb,
  MovieImg,
  MovieDescription,
  Text,
  MoreInfo,
  GoBackBtn,
} from './MovieDetailsPage.styled';
import { StyledNavLink } from 'Components/Navigation/Navigation.styled';

const Reviews = lazy(() => import('./Reviews' /*webpackChankName: 'reviews'*/));

const Cast = lazy(() => import('./Cast' /*webpackChankName: 'cast'*/));

export default function MoviesDetails() {
  const history = useHistory();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(response => {
      const fetchedMovie = response.data;

      setMovie(fetchedMovie);
    });
  }, [movieId]);

  const onClickBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <MovieThumb>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />

            <h2>{movie.title}</h2>

            <MovieDescription>
              Release data: <Text>{movie.release_date.split('-').join('.')}</Text>
            </MovieDescription>

            <MovieDescription>
              Rating: <Text>{movie.vote_average}</Text>
            </MovieDescription>

            <MovieDescription>
              Genres: <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
            </MovieDescription>

            <MovieDescription>
              Overview: <Text>{movie.overview}</Text>
            </MovieDescription>

            <GoBackBtn type="button" onClick={onClickBack}>
              Back
            </GoBackBtn>

            <MoreInfo>Additional information</MoreInfo>

            <StyledNavLink
              to={{ pathname: `${url}/reviews`, state: { from: location?.state?.from } }}
            >
              Reviews
            </StyledNavLink>

            <StyledNavLink to={{ pathname: `${url}/cast`, state: { from: location?.state?.from } }}>
              Cast
            </StyledNavLink>
          </MovieThumb>

          <Suspense fallback="loading...">
            <Switch>
              <Route path={`${path}/reviews`} exact>
                <Reviews />
              </Route>

              <Route path={`${path}/cast`} exact>
                <Cast />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
