import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //--------- ADD TODO----------
    // way to make sure that if no one types in a letter it will just not show up
    // passing this function at line no.-52(onsubmit fn) through onsubmit fn in todoforms.js
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        //inside add todo function storing data in console
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }


    //------------- REMOVE TODO-------------
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };


    // -----------UPDATE TODO-------------
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // -----------COMPLETE TODO-------------
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo} />
            {/* passing all the functions here so that it starts working */}
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList