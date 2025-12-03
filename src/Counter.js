import React, {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    function incCount () {
        setCount(count+1);
    };

    function decCount () {
        if (count>0) {
            setCount(count-1);
        };
    };

    return (
        <div className="container">
            <h3>Current count: {count}</h3>
            <button onClick={incCount}>Increase</button> <button onClick={decCount}>Decrease</button>
        </div>
    );
};

export default Counter;