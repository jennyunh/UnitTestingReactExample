import { useState } from "react"
import Output from "./Output";

const Greeting = () => {

const [changedText, setChangedText] = useState(false);


const changeTextHandler = () => {
    setChangedText(true);
}


return (



<div>


    <h2>HELLO WORLD!</h2>
   {!changedText && <Output>It's good to see you.</Output>}
   {changedText && <Output>Changed!</Output>}
    <button onClick={changeTextHandler}>Change the Text</button>
</div>)
}

export default Greeting
