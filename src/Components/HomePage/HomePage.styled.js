import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  list-style: none;
`;

export const MoviesListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;
