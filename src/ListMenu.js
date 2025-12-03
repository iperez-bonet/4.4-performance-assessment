import {useState} from 'react';
import Todolist from './Todolist.js';

export default function TodoMenu () {
    const [display, setDisplay] = useState(false);
    function setTrue () {setDisplay(true);};
    function setFalse () {setDisplay(false);};

    if (display===false) {
        return (<button onClick={setTrue}>Open List</button>);
    };

    if (display===true) {
        return (
            <>
            <Todolist />
            <button onClick={setFalse}>Close List</button>
            </>
        );
    };
};