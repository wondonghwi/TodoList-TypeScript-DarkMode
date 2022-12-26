import React, { useCallback, useState } from 'react';
import { TodoType } from 'src/types/types';

interface AddButtonProps {
  onAdd: (todo: TodoType) => void;
}

function AddTodo({ onAdd }: AddButtonProps) {
  const [text, setText] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim() === '') return;
      onAdd({ id: Date.now(), text, status: 'active' });
      setText('');
    },
    [onAdd, text]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <input name='item' type='text' placeholder='Add Todo' onChange={handleChange} value={text} />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddTodo;
