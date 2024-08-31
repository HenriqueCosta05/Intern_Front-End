import { render, screen} from "@testing-library/react";
import Header from ".";

describe('Header', () => {
    it('should render the title', () => {
        render(<Header.Title>Test Title</Header.Title>);
        const title = screen.getByText('Test Title');
        expect(title).toBeInTheDocument();
    });
    it('should render the description', () => {
        render(<Header.Description>Test Description</Header.Description>);
        const description = screen.getByText('Test Description');
        expect(description).toBeInTheDocument();
    });
    })