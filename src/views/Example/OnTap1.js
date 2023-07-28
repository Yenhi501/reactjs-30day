import { useState } from "react";
// import { useEffect } from "react";

const items = [
    'RAM 32GB RGB',
    'CPU',
    'GPU 128GB'
]

function OnTap1(){

    const [check, sethCheck] = useState('');

    const handleSubmit = () => {
        const item =  Math.floor(Math.random() * items.length);

        sethCheck(items[item]);
    }
    return (
        <div>
            <h1> {check || 'Chưa có'}</h1>
            <button onClick={handleSubmit}>Lấy Thưởng</button>
        </div>

    );
}

export default OnTap1;