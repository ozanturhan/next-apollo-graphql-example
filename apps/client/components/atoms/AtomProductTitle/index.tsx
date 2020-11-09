import styled from 'styled-components';

export const AtomProductTitle = styled.span`
  font-weight: bold;
  color: #4d4d4d;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
  width: calc(100% - 10px);
`;
