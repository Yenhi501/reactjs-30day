import { useState } from "react";


function OnTap3() {

    const [user, setUser] = useState({
        name :'' ,
        age : '' ,
        email : ''
    });

    const handleChange = (event) => {
        setUser({
            ...user,
           [event.target.name]:  event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);

    }
    return(
        <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type ="submit">Submit</button>
      </form>
    </div>
    );
}
export default OnTap3;