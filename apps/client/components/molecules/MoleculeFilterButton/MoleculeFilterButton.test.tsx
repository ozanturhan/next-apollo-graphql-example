import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByText, render } from '@testing-library/react';
import { MoleculeFilterButton } from './index';

describe('Filter Button', () => {
  it('renders with true', () => {
    const tree = render(<MoleculeFilterButton isToggle={true}>Filtrele</MoleculeFilterButton>).container;
    expect(tree).toMatchSnapshot();
  });

  it('renders with false', () => {
    const tree = render(<MoleculeFilterButton isToggle={false}>Filtrele</MoleculeFilterButton>).container;
    expect(tree).toMatchSnapshot();
  });

  it('renders with disable status', () => {
    const tree = render(
      <MoleculeFilterButton disabled={true} isToggle={false}>
        Filtrele
      </MoleculeFilterButton>,
    ).container;
    expect(tree).toMatchSnapshot();
  });

  it('should be toggled when clicking on it', async () => {
    // Arrange
    const onToggle = jest.fn();
    const isToggle = false;

    const { container } = render(
      <MoleculeFilterButton onToggle={onToggle} isToggle={isToggle}>
        Filtrele
      </MoleculeFilterButton>,
    );

    // Act
    fireEvent(
      getByText(container, 'Filtrele'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    // Assertion
    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
