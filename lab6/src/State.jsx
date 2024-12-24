import  { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <h1>Счетчик: {count}</h1>

        </div>
    );
};

export default Counter;