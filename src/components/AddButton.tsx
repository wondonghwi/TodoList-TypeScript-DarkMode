import React, { useCallback, useState } from 'react';

interface AddButtonProps {
  addItem: (event: React.FormEvent, text: string) => void;
}

function AddButton({ addItem }: AddButtonProps) {
  const [text, setText] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <form
      className='addForm'
      onSubmit={e => {
        addItem(e, text);
        setText('');
      }}
    >
      <input name='item' type='text' onChange={handleChange} value={text} />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddButton;
