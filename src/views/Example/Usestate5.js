import React, { useState } from 'react';

const Usestate5 = () => {
  const [greeting, setGreeting] = useState(1);
// arrow function
  const handleChange = (event) => setGreeting(event.target.value);
  const increment = () => { setGreeting(greeting +1)}
  return (
    <div>
      <h1><b>Thay đổi chỗ này :</b>{greeting}</h1>
      <input type="text" value={greeting} onChange={handleChange} />
      <button onClick={increment}>Clicked</button>
    </div>
  );
};

export default Usestate5;