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