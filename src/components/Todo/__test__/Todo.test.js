import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}


const addTask = (tasks) => {
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");

    // firing events for each task:
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

// Integration testing of todo component:
describe("Integration testing of Todo component", () => {

    // test 1 : can we add text in inputfield and if yes then after we click on add button then it should be passed to todoList component:
    it('should render single input element', () => {
        render(<MockTodo />);
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button");
        fireEvent.change(inputElement, { target: { value: "abc" } })
        fireEvent.click(buttonElement)
        const divElement = screen.getByText("abc")
        expect(divElement).toBeInTheDocument();
    });


    // test 2: There should be the list of todos available inside todoList component:
    it('should render multiple items', () => {
        render(<MockTodo />);
        addTask(["abc", "xyz", "pqr"]) // calling the function which will fire the event 3 times
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3);
    });


    // test 2: Tasks should not have "completed" class when initially rendered:
    it('tasks should not have "completed" class when initially rendered', () => {
        render(<MockTodo />);
        addTask(["abc", "xyz", "pqr"]) // calling the function which will fire the event 3 times
        const taskElement = screen.getByText("abc")
        expect(taskElement).not.toHaveClass("todo-item-active")
    });

    // test 3: Tasks should have "completed" class when initially rendered:
    it('tasks should have "completed" class when initially rendered', () => {
        render(<MockTodo />);
        addTask(["abc", "xyz", "pqr"]) // calling the function which will fire the event 3 times
        const taskElement = screen.getByText("abc")
        fireEvent.click(taskElement)
        expect(taskElement).toHaveClass("todo-item-active")
    });

})