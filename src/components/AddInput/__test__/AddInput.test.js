import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn()  // creating a mock function for setTodos


describe("Testing AddInput component", () => {

    // test for checking the placeholder is "Add a new task here...":
    it('should render input element', () => {
        // render(<AddInput todos={[]} setTodos={() => { }} />);  // in place of setTodos we can provide an empty object like this 
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);  // in place of setTodos we can also provide a mock setTodo
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });



    // test for checking input element text:
    it('should be able to type in input', () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);  // in place of setTodos we can also provide a mock setTodo
        const inputElement = screen.getByRole("textbox");
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } }) // simulating that user is typing 
        expect(inputElement.value).toBe("Go grocery shopping"); // expecting the whatever the value user has typed to be present in screen
    });



    // test for checking when user clicks on add button then input field becomes empty:
    it('should have empty input when add button is clicked', () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);  // in place of setTodos we can also provide a mock setTodo
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button", { name: /Add/i }); // name is not a html name attribute its a actual name of button
        fireEvent.click(buttonElement) // simulating that user is typing 
        expect(inputElement.value).toBe(""); // expecting the whatever the value user has typed to be present in screen
    });
})