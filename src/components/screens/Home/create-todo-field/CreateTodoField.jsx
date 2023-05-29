import React, { useState } from 'react';
import { BiMessageAdd } from 'react-icons/bi';

const CreateTodoField = ({ setTodos, id }) => {
	const [title, setTitle] = useState('');

	const addTodo = title => {
		setTodos(prev => [
			{
				id: id(),
				title: title,
				isCompleted: false,
			},
			...prev,
		]);
		setTitle('');
	};

	return (
		<div className='flex items-center justify-between border-zinc-800 border-2 rounded-2xl px-5 py-3 w-full mb-10'>
			<BiMessageAdd size={24} className='text-pink-400 mr-3' />
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent w-full border-none outline-none'
				placeholder='Add a task and press Enter to save'
			/>
		</div>
	);
};

export default CreateTodoField;
