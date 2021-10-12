import styled from '@emotion/styled';

export const MovieThumb = styled.div`
  text-align: center;
  padding: 40px;
`;

export const MovieImg = styled.img`
  margin: 0 auto;
`;

export const MovieDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const MoreInfo = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

export const Text = styled.span`
  color: gray;
  font-size: 22px;
  font-weight: 500;
`;

export const ReviewsList = styled.ul`
  list-style: none;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 40px;
`;

export const GoBackBtn = styled.button`
  margin: 10px;
  border: 1px solid grey;
  border-radius: 23px;
  padding: 12px 24px;
  color: black;
  transition: all 250ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
