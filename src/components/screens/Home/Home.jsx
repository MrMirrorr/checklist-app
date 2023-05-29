import React, { useState } from 'react';
import TodoItem from './Item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';
import { nanoid } from 'nanoid';
import ChangeTodoField from './change-todo-field/ChangeTodoField';

const id = () => nanoid(5);

const data = [
    {
        id: id(),
        title: 'Finish learn HTML',
        isCompleted: false,
    },
    {
        id: id(),
        title: 'Finish learn CSS',
        isCompleted: false,
    },
    {
        id: id(),
        title: 'Finish learn JavaScript',
        isCompleted: false,
    },
    {
        id: id(),
        title: 'Finish learn framework React',
        isCompleted: false,
    },
];

const Home = () => {
    const [todos, setTodos] = useState(data);
    const [editId, setEditId] = useState(null);

    const changeTodo = id => {
        setTodos(
            [...todos].map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }

                return todo;
            })
        );
    };

    const startEdit = id => {
        setEditId(id);
    };

    const stopEdit = () => {
        setEditId(null);
    };

    const editTodo = (event, prop) => {
        setTodos(
            todos.map(todo => (todo.id === editId ? { ...todo, [prop]: event.target.value } : todo))
        );
    };

    const removeTodo = id => setTodos([...todos].filter(todo => todo.id !== id));
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">
                Todo list by Kirisenko Stanislav
            </h1>
            <CreateTodoField setTodos={setTodos} id={id} />
            <ChangeTodoField
                todos={todos}
                editId={editId}
                setTodos={setTodos}
                editTodo={editTodo}
                stopEdit={stopEdit}
            />
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                    startEdit={startEdit}
                />
            ))}
        </div>
    );
};

export default Home;
