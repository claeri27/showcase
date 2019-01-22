import styled from 'styled-components';

const Spinner = styled.img`
  animation: spin infinite 20s linear;
  max-width: 100px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
