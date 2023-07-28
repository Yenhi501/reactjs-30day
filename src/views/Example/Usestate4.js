import { useState } from 'react';

function Usestate4(){
    const [info, setInfo] = useState({
        name : 'Vo Yen Nhi',
        age : 22,
        adress : 'Quang Nam'
    })

    const handUpdate = () => {
        setInfo({
            ...info,
            Student : 'XuatSac'
        })
    }
    return (
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handUpdate}>Update</button>
        </div>
    );
}

export default Usestate4;