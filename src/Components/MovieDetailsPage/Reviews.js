import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieReviews } from 'Services/moviesAPI';
import { ReviewsItem, ReviewsList, Text } from './MovieDetailsPage.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(response => {
      const fetchedReview = response.data.results;
      console.log('~ fetchedReview', fetchedReview);

      setReviews(fetchedReview);
    });
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews && reviews.length > 0
        ? reviews.map(({ id, author, content, url }) => (
            <ReviewsItem key={id}>
              <h3>{author}</h3>
              <Text>{content}</Text>
            </ReviewsItem>
          ))
        : 'Sorry, nothing found...'}
    </ReviewsList>
  );
}
