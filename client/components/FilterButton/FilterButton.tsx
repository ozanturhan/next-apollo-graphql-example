import { Box } from '..';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.isToggle && '#DA514A') || 'transparent'};
  color: ${(props) => (props.isToggle && 'white') || 'black'};
  border: none;
  height: 100%;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 20px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isToggle && '#DA514A') || '#cdcdcd'};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: grey;
    color: #cdcdcd;
  }

  @media only screen and (max-width: 568px) {
    font-size: 1.4rem;
  }
`;

export interface FilterButtonProps {
  children: any;
  isToggle: boolean;
  disabled?: boolean;
  onToggle?: (val: boolean) => void;
}

export const FilterButton = ({ children, isToggle, onToggle, disabled }: FilterButtonProps) => {
  return (
    <Box padding="0px">
      <Button disabled={disabled} onClick={() => onToggle && onToggle(!isToggle)} isToggle={isToggle}>
        {children}
      </Button>
    </Box>
  );
};
