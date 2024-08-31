import { render, screen } from '@testing-library/react';
import { ButtonGroup, Button } from '..';

describe('ButtonGroup component', () => {
  test('renders children', () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    );
    const buttonGroupElement = screen.getByTestId('button-group');
    expect(buttonGroupElement).toBeInTheDocument();
    expect(buttonGroupElement).toHaveClass('flex space-x-4');
    expect(screen.getByText(/Button 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Button 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Button 3/i)).toBeInTheDocument();
  });

  test('applies additional class names', () => {
    render(
      <ButtonGroup className="extra-class">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    );
    const buttonGroupElement = screen.getByTestId('button-group');
    expect(buttonGroupElement).toBeInTheDocument();
    expect(buttonGroupElement).toHaveClass('flex space-x-4 extra-class');
  });
});