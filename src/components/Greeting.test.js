import { render, screen } from '@testing-library/react';
import Greeting from './Greeting'
import userEvent from '@testing-library/user-event'

//describe function is global and creates a test suite
describe("Greeting Component", () => {


//test function is globally available
//screen gives access to the virtual screen (virtual testing environment)

test("it rendered hello world!", () => {
    //Arrange
    render(<Greeting/>);
    
    //Act
    //..nothing
    
    //Assert -> check if result is expected (look at the dom)
    
    const helloWorldElement = screen.getByText('HELLO WORLD!', {exact: true})
    expect(helloWorldElement).toBeInTheDocument()
    
    });


    test("renders it's good to see you if not clicked", () => {
render(<Greeting/>);

const goodToSee = screen.getByText('good to see you', {exact: false})
expect(goodToSee).toBeInTheDocument()


    })


    //Arrange
test("renders Changed! if the button clicked", () => {
render(<Greeting/>)

//Act
const buttonEle = screen.getByRole('button')

userEvent.click(buttonEle);

//Assert
const changed = screen.getByText('Changed!')
expect(changed).toBeInTheDocument()

})






test("does not render it's good to see you when button clicked", () => {
    render(<Greeting/>)
    
    //Act
    const buttonEle = screen.getByRole('button')
    
    userEvent.click(buttonEle);
    
    //Assert
    //queryByText returns null if it cant find something.
    const goodToSee = screen.queryByText('good to see you')
    expect(goodToSee).toBeNull();
    
    })


})

