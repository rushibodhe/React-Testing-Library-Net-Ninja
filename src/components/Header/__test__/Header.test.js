import { render, screen } from '@testing-library/react';
import Header from '../Header';



// In this test we are checking that if we pass title prop to the Header component then that renders on screen or not?


// 1. Using Priority 1 ie accessible by everyone

// a. using getByText method:
it('should render same text passed into title prop', () => {
    render(<Header title="My Header" />);  // rendering the component with prop My Header
    const headingElement = screen.getByText(/my header/i);  // fetching the data from screen using getByText method
    expect(headingElement).toBeInTheDocument();
});


// // b. using getByRole method:
// // Note: We are using getByRole method due to which it expects only a single heading element to be present in the screen if there are mroe than 1 headings then this test will fail.
// // it('should render a heading element', () => {
// //     render(<Header title="My Header" />);  // rendering the component with prop My Header
// //     const headingElement = screen.getByRole('heading');  // checking the rendered element has a role of heading (ie h1)
// //     expect(headingElement).toBeInTheDocument();
// // });


// // c. using getByRole method with {name: "My Header"} object:
// it('should render a heading element', () => {
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = screen.getByRole('heading', { name: "My Header" });  // checking the rendered element has a role of heading (ie h1) and the name as My Header
//     expect(headingElement).toBeInTheDocument();
// });



// // 2. Using Priority 2 ie semantic queries:
// // Using getByTitle:
// it('should render a heading element which has text header', () => {
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = screen.getByTitle('header');  // checking the rendered element has a role of heading (ie h1) and the name as My Header
//     expect(headingElement).toBeInTheDocument();
// });



// // 3. Using Priority 3 ie Test ID:
// it('should render a heading element which has test id header-1', () => {
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = screen.getByTestId('header-1');  // checking the rendered element has a role of heading (ie h1) and the name as My Header
//     expect(headingElement).toBeInTheDocument();
// });



// // Using findBy method: (async tests)
// it('should render same text passed into title prop async', async () => { // note we have added async here
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = await screen.findByText(/my header/i);  //Note we have added await here for finding the data from screen using getByText method
//     expect(headingElement).toBeInTheDocument();
// });


// // Using queryBy method:
// // Why we need queryBy method:
// it('should render same text passed into title prop using getBy', () => {
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = screen.getByText(/dogs/i);  // as "dogs" text is not present in the screen hence this will fail here itself but in next line we have written that fail this test if the "dogs" text is not present in the screen but because of test does not even goes to the next line and it fails at the top itself hence we need queryBy method
//     expect(headingElement).not.toBeInTheDocument(); //
// });



// it('should render same text passed into title prop using queryBy', () => {
//     render(<Header title="My Header" />);  // rendering the component with prop My Header
//     const headingElement = screen.queryByText(/dogs/i);  // finding the data from screen using queryByText method
//     expect(headingElement).not.toBeInTheDocument(); // Note we have added .not so that to pass this test case we are not expecting "dogs" text to be present in screen
// });


// // getAllByRole:
// it('should get all elements which have heading role', () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole("heading"); // taking all elements which has "heading" role
//     expect(headingElements.length).toBe(2);  // note here we have use .length along with .toBe(2) assertion
// });






