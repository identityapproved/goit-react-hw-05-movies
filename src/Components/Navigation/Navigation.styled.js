import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  padding: 32px;
  &.active {
    color: blueviolet;
    text-decoration: underline;
  }
`;

export const StyledHeader = styled.header`
  background-color: gray;
  padding: 40px;
`;
