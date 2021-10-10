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
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 2px 24px;
  color: #fff;
  background-color: gray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
