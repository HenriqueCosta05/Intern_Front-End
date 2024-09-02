import { render, screen } from "@testing-library/react";
import Table from ".";

describe('Table', () => {
    it('should render a table, using composition pattern', () => {
        render(
        <Table.Root>
            <Table.Body>
                <Table.Row>
                    <Table.Header>
                        Teste
                    </Table.Header>
                </Table.Row>
            </Table.Body>
        </Table.Root>);
        const table = screen.getByTestId('table');
        expect(table).toBeInTheDocument();
    });
    test('should render a table with headers and data', () => {
        render(
            <Table.Root>
                <Table.Body>
                <Table.Row>
                    <Table.Header>
                        Teste
                    </Table.Header>
                </Table.Row>
                <Table.Row>
                    <Table.Data>
                        Data
                    </Table.Data>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        );
        const table = screen.getByTestId('table');
        expect(table).toBeInTheDocument();
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
})