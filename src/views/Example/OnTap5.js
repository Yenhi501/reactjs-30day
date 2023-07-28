import { useState } from "react";

const items = [
    {
        id : 1,
        name : 'HTML, CSS',
    },
    {
        id : 2,
        name : 'Javascript',
    },
    {
        id : 3,
        name : 'ReactJS',
    }
]
function OnTap5() {
    const [check, setCheck] = useState();

    const handleSubmit = () => {
        console.log({id : check});
    }
    return (
        <div>
                {items.map(item =>(
                    <div key={item.id}>
                        <input type="radio" checked={check === item.id} onChange={() => setCheck(item.id) } />
                        {item.name}
                    </div>
                ))}
                <button onClick={handleSubmit}>Đăng kí</button>
        </div>
    );
}

export default OnTap5;