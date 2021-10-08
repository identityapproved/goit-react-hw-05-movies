import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchMovies } from 'Services/moviesAPI';
import { MoviesList, MoviesListItem, StyledLink } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovies().then(response => {
      const fetchedMovies = response.data.results;
      console.log('~ fetchedMovies', fetchedMovies);
      setMovies(fetchedMovies);
    });
  }, []);

  return (
    <>
      <h1>Trending</h1>
      {movies && (
        <MoviesList>
          {movies.map(movie => (
            <MoviesListItem key={movie.id}>
              <StyledLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.original_title}
              </StyledLink>
            </MoviesListItem>
          ))}
        </MoviesList>
      )}
    </>
  );
}
