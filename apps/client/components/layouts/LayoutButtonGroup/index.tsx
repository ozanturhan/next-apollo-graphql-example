import styled from 'styled-components';

export const LayoutButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media only screen and (max-width: 568px) {
    margin-bottom: 20px;
    justify-content: center;
  }
`;
