// Two - way - building

import { useState } from "react";

function XS_1706_1(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

        console.log({
            password,
            email
        })
    }

    const handleChangeName = (event) => {setPassword(event.target.value)}
    const handleChangeEmail = (event) => {setEmail(event.target.value)}

    return (
        <div>
            <div>
            Email : <input value={email} onChange={handleChangeEmail} placeholder="yennhi81lqs@gmail.com"/>
            </div>
            <div>
            Password : <input value={password} onChange= {handleChangeName} placeholder="Xuatsac"/>
            </div>
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default XS_1706_1;