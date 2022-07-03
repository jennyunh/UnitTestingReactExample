import { render, screen } from '@testing-library/react'
import Async from "./Async"


describe("Async component", () => {

    test(
"renders posts", async () => {


    //NOTE: you don't want to actually fetch stuff to the server when your testing. 
    //it can heavily traffic the network with all the requests, and you wouldnt want to
    //change database if there is for instance a POST request.
    //use a MOCK/fake fetch function by using built-in jest.fn
    window.fetch = jest.fn()

    //right after fetch in async.js, the resolved value (response) is then 
    //convert from JSON to js object
window.fetch.mockResolvedValueOnce({
    json: async () => [{id: 'p1', title: 'first post'}]
});


render(<Async/>)

//getAllByRole immediately gets all list items
//findAllByRole returns a promise. Takes three arguments:
//the role, exact, and set a timeout period
const listItemElements = await screen.findAllByRole('listitem');

//this doesnt work because getting the list of items is asynchronous. Initially,
//the array is empty so the test fails. 

await expect(listItemElements).not.toHaveLength(0)



}
    )
})