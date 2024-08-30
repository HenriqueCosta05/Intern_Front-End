import { render, screen } from '@testing-library/react';
import Button from './Button'; 

describe('Button component', () => {
    test('renders with primary variant by default', () => {
        render(<Button>Primary Button</Button>);
        const buttonElement = screen.getByText(/Primary Button/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-lowOrange');
    });

    test('renders with secondary variant', () => {
        render(<Button variant="secondary">Secondary Button</Button>);
        const buttonElement = screen.getByText(/Secondary Button/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('bg-darkOrange');
    });

    test('applies additional class names', () => {
        render(<Button className="extra-class">Button with Extra Class</Button>);
        const buttonElement = screen.getByText(/Button with Extra Class/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('extra-class');
    });
});