import React from 'react';
import styled from 'styled-components';
import HeartIcon from '../../public/heart.svg';

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

const Heart = styled(HeartIcon)`
  height: 18px;
`;

export interface LikeButtonProps {
  isLiked: boolean;
  onToggle?: (isLiked: boolean) => void;
}

export const LikeButton = ({ isLiked, onToggle }: LikeButtonProps) => {
  return (
    <Button isLiked={isLiked} onClick={() => onToggle && onToggle(!isLiked)}>
      <Heart />
    </Button>
  );
};
