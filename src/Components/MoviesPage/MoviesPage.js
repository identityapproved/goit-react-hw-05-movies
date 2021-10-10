import Container from 'Components/Container/Container';
import SearchBar from 'Components/SearchBar/SearchBar';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'Services/moviesAPI';
import { MoviesList, MoviesListItem, StyledLink } from 'Components/HomePage/HomePage.styled';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();

  const [movieName, setMovieName] = useState('');
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    fetchSearchMovies(movieName).then(response => {
      const fetchedMovies = response.data.results;
      console.log('~ fetchedMovies', fetchedMovies);

      setSearch(fetchedMovies);
    });
  }, [movieName]);

  const handleInputSubmit = q => {
    setMovieName(q);
    if (q.trim() === '') {
      toast.warn('Write something, please...', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setSearch(null);

    history.push({ ...location, search: `movie=${q}` });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleInputSubmit} />

      <MoviesList>
        {search &&
          search.map(result => (
            <MoviesListItem key={result.id}>
              <StyledLink
                to={{
                  pathname: `/movies/${result.id}`,
                  state: { from: location },
                }}
              >
                {result.title}
                {result.name}
              </StyledLink>
            </MoviesListItem>
          ))}
      </MoviesList>
    </Container>
  );
}
