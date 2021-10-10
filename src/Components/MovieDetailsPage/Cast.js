import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCredits } from 'Services/moviesAPI';
import { ReviewsItem, ReviewsList, Text } from './MovieDetailsPage.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(response => {
      const fetchedCast = response.data.cast;
      console.log('~ fetchedReview', fetchedCast);

      setCast(fetchedCast);
    });
  }, [movieId]);

  return (
    <ReviewsList>
      {cast && cast.length > 0
        ? cast.map(({ id, name, character }) => (
            <ReviewsItem key={id}>
              <h3>{name}</h3>
              <Text>{character}</Text>
            </ReviewsItem>
          ))
        : 'Sorry, nothing found...'}
    </ReviewsList>
  );
}
