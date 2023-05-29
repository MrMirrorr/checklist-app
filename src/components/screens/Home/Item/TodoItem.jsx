import React from 'react';
import Check from './Check';
import cn from 'classnames';
import { IoTrashBinSharp } from 'react-icons/io5';
import { BsFillPencilFill } from 'react-icons/bs';

const TodoItem = ({ todo, changeTodo, removeTodo, startEdit }) => {
    return (
        <div className="flex items-center justify-between mb-4 bg-zinc-800 rounded-2xl p-5 w-full">
            <button className="flex items-center text-left" onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted} />
                <span
                    className={cn({
                        'line-through': todo.isCompleted,
                    })}
                >
                    {todo.title}
                </span>
            </button>
            <div className="flex items-center">
                <button onClick={() => startEdit(todo.id)}>
                    <BsFillPencilFill
                        size={22}
                        className="text-sky-300 hover:text-sky-700 transition-colors ease-in-out duration-300"
                    />
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <IoTrashBinSharp
                        size={22}
                        className="text-sky-300 hover:text-red-700 transition-colors ease-in-out duration-300 ml-5"
                    />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
