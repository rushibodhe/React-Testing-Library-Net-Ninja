import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}


describe("Testing FollowersList component", () => {

    // beforeEach: (this will run before running every test)
    beforeEach(() => {
        console.log("Running this before each test case");
    })


    // beforeAll: (this will run before running tests only once and will not run before each test)
    beforeAll(() => {
        console.log("Running once only before running test case");
    })


    // afterEach: (this will run after running every test)
    afterEach(() => {
        console.log("Running this after each test case");
    })

    // afterAll: (this will run after running tests only once and will not run after each test)
    afterAll(() => {
        console.log("Running once only after running test case");
    })


    // test1: should render follower items:
    it('should render follower items', async () => {
        render(<MockFollowersList />);  // rendering the component with prop My Header
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });


    // test2: should render multiple follower items:
    it('should render multiple follower items', async () => {
        render(<MockFollowersList />);  // rendering the component with prop My Header
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    });


})

