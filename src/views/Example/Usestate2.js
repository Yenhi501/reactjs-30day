 import { useState } from 'react';

 function Usestate2(){
    const [counter, setCounter] = useState(1);
    return(
        <div>
            <h1>You clicked {counter} times</h1>
            <button onClick={() => setCounter(counter +1)}> Click me</button>
        </div>

    );
 }
 
export default Usestate2;