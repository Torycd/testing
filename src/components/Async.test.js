import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Assigned component', () => {
    test('render posts if request succeds', async() => {
        window.fetch = jest.fn()
        window.fetch.mockResolveValueOnce({json: async () => [{id: 'p1', title: 'First post'}]})
        render(<Async/>)
        const listItemElements =  await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })
})