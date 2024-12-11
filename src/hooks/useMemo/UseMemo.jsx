import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const handleIncrement = () => {
    console.log('Increment')
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="full_contain">
        <div className="container">
          <h3>useMemo hook</h3>
          <p>Memoized Value: {memoizedValue}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div className="container1">
          <p>{text}</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default UseMemo;
