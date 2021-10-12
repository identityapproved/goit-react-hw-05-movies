import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const OnLoading = () => {
  return (
    <LoadContainer>
      <Loader type="Oval" color="#3f51b5" height={120} width={120} timeout={3000} />
    </LoadContainer>
  );
};

const LoadContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
