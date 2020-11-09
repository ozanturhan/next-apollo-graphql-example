import styled from 'styled-components';

export const LayoutMain = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    height: 100%;
    padding: 10px;
  }
`;
