import React, { useState } from 'react';

function UseStateObj() {
  // Declare a state variable 'user', initialized to an object
  const [user, setUser] = useState({ name: '', age: 0 });

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
        placeholder="Age"
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default UseStateObj;
