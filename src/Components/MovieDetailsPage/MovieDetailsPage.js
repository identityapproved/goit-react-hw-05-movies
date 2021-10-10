import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
import { fetchMovieDetails } from 'Services/moviesAPI';
import { Suspense, useEffect, useState, lazy } from 'react';
import { MovieThumb, MovieImg, MovieDescription, Text, MoreInfo } from './MovieDetailsPage.styled';
import { StyledNavLink } from 'Components/Navigation/Navigation.styled';
import Cast from './Cast';

const Reviews = lazy(() => import('./Reviews' /*webpackChankName: 'reviews'*/));

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

  return (
    movie && (
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
    )
  );
}
