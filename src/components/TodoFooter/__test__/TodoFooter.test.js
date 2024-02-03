import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';


// In this test case our objective is to find the how many number of tasks it shows on screen?

// Problems with router while testing and how to solve them?
// Note: This test case will fail because we have used router in the TodoFooter component and currently we are testing this component on complete isolation and we cannot test our component in isolation if it has a router hence to avoid this error check the corrected code:

// Incorrect code for router
// it('should render the correct amount of incomplete tasks', () => {
//     render(<TodoFooter numberOfIncompleteTasks={5} />);
//     const paragraphElement = screen.getByText(/5 tasks left/i);
//     expect(paragraphElement).toBeInTheDocument();
// });



// Corrected code for router:
// Creating mock TodoFooter:
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {

    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}


// We can use "describe" to group the testcases:
describe("Testing functionality 1", () => {
    // Then passing that MockTodoFooter 
    it('should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });



    // Different types of assertions:
    // toBeInTheDocument():
    it('should render "task" singular when the number of incomplete tasks in one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

})



// // toBeVisible(): failed testcase deliberately
// // Note: difference between toBeVisible and toBeInTheDocument is that if there is opacity 0 style added to the element then it will not be visible to the user hence in this case we can use this property
// // This will fail because we have added style = {{"opcaity": 0}}
// it('should render "task" singular when the number of incomplete tasks in one with toBeVisible assertion', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible();  // This assertion method allows you to check if an element is currently visible to the user
// });


// // toContainHTML():
// it('should render "task" singular when the number of incomplete tasks in one with toContainHTML assertion', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p");
// });


// // toHaveTextContent():
// // Note: Its used when you couldnt get the text from screen because you used a getByRole attribute:
// it('should render "task" singular when the number of incomplete tasks in one with toHaveTextContent assertion', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).toHaveTextContent("1 task left");
// });



// // .not.anyassertion_method():
// // Note: Its used when you want the opposite of the provided assertion method:
// it('should render "task" singular when the number of incomplete tasks in one with .not assertion', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).not.toBeVisible()
// });



// // You can also use element's properties while assertion:
// it('should render "task" singular when the number of incomplete tasks in one with textContent added in assertion', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement.textContent).toBe("1 task left")  // using .textContent property while assertion
// });


// // Note there can be multiple assertions also but its not recommended because it can fail the whole test and we need to check which assertion has actually failed.
// // Example:
// // it('should render "task" singular when the number of incomplete tasks in one with textContent added in assertion', () => {
// //     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
// //     const paragraphElement = screen.getByTestId("para");
// //     expect(paragraphElement.textContent).toBe("1 task left")  // using .textContent property while assertion
// //     expect(paragraphElement.textContent).toBe("1 task left")  // using .textContent property while assertion
// //     expect(paragraphElement.textContent).toBe("1 task left")  // using .textContent property while assertion
// // });
