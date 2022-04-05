import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

// useEffect and useRef used for focusing on the cursor(after refreshing page or for
// next todo list it is automatically placed in the input section so that
// we can just go ahead and start typing without placing the cursor)
    const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

    // now we can write anything in the input section
    const handleChange = e => {
        setInput(e.target.value);
    };

    // prevent refreshing on clicking button(Add todo)
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        //   as soon as we click the button it refreshes the text we wrote
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                placeholder="What's the Plan for Today?"
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add todo
              </button>
            </>
          )}
        </form>
      );
    }
    

export default TodoForm