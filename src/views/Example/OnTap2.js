import { useState } from 'react';
// import { useEffect } from 'react';

const items = [
    {
        id : 1,
        name : 'Gift1'
    },
    {
        id : 2,
        name : 'Gift2'
    },
    {
        id : 3,
        name : 'Gift3'
    },
    {
        id : 4,
        name : 'Gift4'
    },
    {
        id : 5,
        name : 'Gift5'
    }
]
function OnTap2() {
    const [check, setCkeck] = useState();
    const handleSubmit = () => {
        console.log({id : check})
    }
    return (
        <div>
            {items.map((item) => (
                <div key = {item.id}>
                <input type="radio" checked = {check === item.id} onChange={() => setCkeck(item.id)} /> {item.name}
                </div>
            ))}
                <button onClick={handleSubmit}>Mua</button>
        </div>

    );
}

export default OnTap2;