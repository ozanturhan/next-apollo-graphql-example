import React, { useMemo } from 'react';
import styled from 'styled-components';
import { AtomBox } from '../../atoms';

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

export const MoleculeFilterButton = ({ children, isToggle, onToggle, disabled }: FilterButtonProps) => {
  return useMemo(() => {
    console.log('Render MoleculeFilterButton');
    return (
      <AtomBox padding="0px">
        <Button
          aria-label="Filter Button"
          data-testid="filter-button"
          disabled={disabled}
          onClick={() => onToggle && onToggle(!isToggle)}
          isToggle={isToggle}
        >
          {children}
        </Button>
      </AtomBox>
    );
  }, [disabled, isToggle]);
};
