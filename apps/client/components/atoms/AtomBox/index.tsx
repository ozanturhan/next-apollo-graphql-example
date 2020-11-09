import styled from 'styled-components';

export const AtomBox = styled.div`
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding || '20px'};
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
