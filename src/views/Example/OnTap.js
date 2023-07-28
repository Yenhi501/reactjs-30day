import { useState } from 'react';

function OnTap(){
    const [counter, setCounter] = useState(2);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }
    return(
        <div>
            <h1> Clicked {counter} times</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>

    );
}

export default OnTap;

