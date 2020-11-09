import React from 'react';
import styled from 'styled-components';
import { AtomIconLike } from '../../atoms/AtomIconLike';

const Button = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg path {
    transition-duration: 0.2s;
    fill: ${(props) => (props.isLiked ? '#D7443E' : '#eeeeee')};
    stroke: black;
    stroke-width: 5;
  }
`;

export interface LikeButtonProps {
  isLiked: boolean;
  onToggle?: (isLiked: boolean) => void;
}

export const MoleculeLikeButton = ({ isLiked, onToggle }: LikeButtonProps) => {
  return (
    <Button
      aria-label="Like Button"
      data-testid="like-button"
      isLiked={isLiked}
      onClick={() => onToggle && onToggle(!isLiked)}
    >
      <AtomIconLike />
    </Button>
  );
};
