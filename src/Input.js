import React, {useState} from 'react';

function Input () {
    const [text, setText] = useState('');

    function handleChange (e) {
        if (e.target.value === '') {
            setText("No text entered");
        } else {
            setText(e.target.value);
        };
    };

    return (
        <div className='container'>
            <h3>Text input: {text}</h3>
            <input type='text' placeholder='Type anything' onChange={handleChange} /><br />
        </div>
    );
};

export default Input;