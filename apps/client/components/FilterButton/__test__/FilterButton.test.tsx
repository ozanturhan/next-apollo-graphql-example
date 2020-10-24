import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByText, render } from '@testing-library/react';
import { FilterButton } from '../FilterButton';

describe('Filter Button', () => {
  it('renders with true', () => {
    const tree = render(<FilterButton isToggle={true}>Filtrele</FilterButton>).container;
    expect(tree).toMatchSnapshot();
  });

  it('renders with false', () => {
    const tree = render(<FilterButton isToggle={false}>Filtrele</FilterButton>).container;
    expect(tree).toMatchSnapshot();
  });

  it('renders with disable status', () => {
    const tree = render(
      <FilterButton disabled={true} isToggle={false}>
        Filtrele
      </FilterButton>,
    ).container;
    expect(tree).toMatchSnapshot();
  });

  it('should be toggled when clicking on it', async () => {
    // Arrange
    const onToggle = jest.fn();
    const isToggle = false;

    const { container } = render(
      <FilterButton onToggle={onToggle} isToggle={isToggle}>
        Filtrele
      </FilterButton>,
    );

    // Act
    fireEvent(
      getByText(container, 'Filtrele'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    // Assertion
    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
