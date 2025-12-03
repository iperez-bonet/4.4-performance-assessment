import {useState} from 'react';
import Counter from './Counter.js';

export default function CounterMenu () {
    const [display, setDisplay] = useState(false);
    function setTrue () {setDisplay(true);};
    function setFalse () {setDisplay(false);};

    if (display===false) {
        return (<button onClick={setTrue}>Open Counter</button>);
    };

    if (display===true) {
        return (
            <>
            <Counter />
            <button onClick={setFalse}>Close Counter</button>
            </>
        );
    };
};