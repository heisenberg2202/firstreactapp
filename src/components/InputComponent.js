import { useState } from 'react';

export default function InputComponent() {
    const [inputText, setText] = useState('hello');   //hooks
    // it has a variable inputText and a function setText to change that text.
    
    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
} 