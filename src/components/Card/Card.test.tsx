import { render } from "@testing-library/react";
import { ClientIcon } from "../../Icons";
import Card from ".";

describe('Card', () => {
    it('should render', () => {
        const { container } = render(<Card.Root />);
        expect(container).toBeInTheDocument();
    });
    
    it('should render with children', () => {
        const { container } = render(
        <Card.Root>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
        </Card.Root>
        );
        expect(container).toBeInTheDocument();
    });
    
    it('should render with icon', () => {
        const { container } = render(
        <Card.Root>
            <Card.Icon icon={ClientIcon} />
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
        </Card.Root>
        );
        expect(container).toBeInTheDocument();
    });
});