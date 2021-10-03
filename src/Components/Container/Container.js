import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
