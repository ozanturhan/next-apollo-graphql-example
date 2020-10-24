import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { LikeButton } from '../LikeButton';

describe('Like Button', () => {
  it('renders with liked', () => {
    const tree = render(<LikeButton isLiked={true} />).container;
    expect(tree).toMatchSnapshot();
  });

  it('renders with unliked', () => {
    const tree = render(<LikeButton isLiked={false} />).container;
    expect(tree).toMatchSnapshot();
  });

  it('should be toggled when clicking on it', async () => {
    // Arrange
    const onToggle = jest.fn();
    const isLiked = false;

    const { container } = render(<LikeButton onToggle={onToggle} isLiked={isLiked} />);

    // Act
    fireEvent(
      getByRole(container, 'button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    // Assertion
    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
