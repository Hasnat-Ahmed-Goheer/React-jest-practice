import {render,screen,waitFor} from '@testing-library/react';
import Async from '../components/Async';

describe("Async Component",() =>{

    test("renders posts if request succeeds",async () => {
        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async () =>[{id:'p1',title:'First Post'}]
        })
        render(<Async/>);
        // Act


        // Assert
        waitFor(async () => {
            const listItemElements = await screen.findAllByRole('listitem');
            expect(listItemElements).not.toHaveLength(0);   
        })
    });
});