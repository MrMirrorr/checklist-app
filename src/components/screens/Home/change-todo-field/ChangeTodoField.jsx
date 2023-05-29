import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const ChangeTodoField = ({ todos, editId, editTodo, stopEdit }) => {
    function getValue(prop) {
        if (editId !== null) {
            return todos.reduce((res, todo) => (todo.id === editId ? todo[prop] : res), '');
        }
    }

    let field;
    if (editId !== null) {
        field = (
            <TextareaAutosize
                value={getValue('title')}
                onChange={event => editTodo(event, 'title')}
                onKeyDown={event => event.key === 'Enter' && stopEdit()}
                className="bg-transparent w-full overflow-hidden mb-5 outline-none border border-zinc-500 rounded-lg p-3"
            />
        );
    } else {
        field = '';
    }

    return <>{field}</>;
};

export default ChangeTodoField;
