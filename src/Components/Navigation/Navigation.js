import { StyledHeader, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledHeader>
      <StyledNavLink to="/" exact>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledHeader>
  );
}
