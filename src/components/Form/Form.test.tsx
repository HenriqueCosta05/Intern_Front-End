import { render, screen, fireEvent} from "@testing-library/react";
import Form from ".";

describe('Form', () => {
    it('should render a form, using composition pattern', () => {
        render(
        <Form.Root>
                <Form.Label htmlFor="email" className="font-extrabold block">
                    Teste
                </Form.Label>
        </Form.Root>);
        const form = screen.getByTestId('form');
        expect(form).toBeInTheDocument();
    });
 test("calls onSubmit with the form data when form is submitted", () => {
   const handleSubmit = jest.fn((event) => {
     event.preventDefault(); 
   });

  const { getByText } = render(
    <Form.Root onSubmit={handleSubmit}>
        <Form.Button type="submit">Submit</Form.Button>
    </Form.Root>
  );

   const submitButton = getByText("Submit");
   fireEvent.click(submitButton);

   expect(handleSubmit).toHaveBeenCalledTimes(1);
   expect(handleSubmit).toHaveBeenCalledWith(expect.any(Object)); 
 });
        
})