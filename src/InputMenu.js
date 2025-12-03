import {useState} from 'react';
import Input from './Input.js';

export default function InputMenu () {
    const [display, setDisplay] = useState(false);
    function setTrue () {setDisplay(true);};
    function setFalse () {setDisplay(false);};

    if (display===false) {
        return (<button onClick={setTrue}>Open Input</button>);
    };

    if (display===true) {
        return (
            <>
            <Input />
            <button onClick={setFalse}>Close Input</button>
            </>
        );
    };
};