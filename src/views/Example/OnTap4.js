import { useState } from "react";

function OnTap4() {

    const [user , setUser] = useState('');
    const [pass , setPass] = useState('');

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    const handleChangePass = (event) => {
        setPass(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            user,
            pass
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <input type="text" value={user} onChange={handleChangeUser} />
            </div>
            <div>
            <input type="password" value={pass} onChange={handleChangePass} />
            </div>

            <button type="submit">Đăng kí</button>
            </form>
        </div>
    );
}

export default OnTap4;