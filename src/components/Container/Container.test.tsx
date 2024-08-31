import { render } from "@testing-library/react";
import { Container } from "..";

describe('Container', () => {
    it('should render', () => {
        const { container } = render(<Container><div>Teste</div></Container>);
        expect(container).toBeInTheDocument();
    });
    
    it('should render with children', () => {
        const { container } = render(
        <Container>
            <div>Container Children</div>
        </Container>
        );
        expect(container).toBeInTheDocument();
    });
})