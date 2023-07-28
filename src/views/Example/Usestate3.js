import { useState } from 'react';

function Usestate3(){
    const [counter, setCounter] = useState(true);
    return(
        <div>
            <button onClick={ () => {setCounter(!counter)}}>
                Click here !
            </button>
            { counter ? <h1> Xuất sắc </h1> : <h1> Giỏi</h1>}
        </div>
    );
}

export default Usestate3;