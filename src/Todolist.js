import React, {useState} from 'react';

function Todolist () {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');

    function handleChange (e) {
            setText(e.target.value);
    };

    function addItem() {
        if (text==='') {
            alert("Please enter some text to add an item");
        } else {
        const newList = [...list, text];
        setList(newList);
        setText('');
        };
    };

    function delItem (index) {
        const newList = list.filter((_,i) => i !== index);
        setList(newList);
    };

    const List = () => {
        return (
            <ul>
                {list.map((list, index) => (<li key={index}>{list}<button onClick={() => delItem(index)}>Delete</button></li>))}
            </ul>
        );
    };

    return (
        <div className='container'>
            <h3>To-do List</h3>
            <List />
            <input type='text' placeholder='Add an item' value={text} onChange={handleChange} /> <button type='submit' onClick={addItem}>Add</button>
        </div>
    );
};

export default Todolist;