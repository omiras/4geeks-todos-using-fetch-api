import React, { useState } from "react";

import Item from "./Item";

const TodoList = ({todos , onCreate, onDelete}) => {

  const [inputValue, setInputValue ] = useState('');


  const handleKeyUp = (e) => {
    const {key} = e;

    if (key!='Enter' || !inputValue.trim()) {
        return;
    }

    onCreate(inputValue);

  };

  const handleRemoveItem = (e) => {
    console.log('Item ID to remove: ' + e.target.id);
    onDelete(e.target.id);
};

  return (
    <div>
      <div className="input-group">
        <input
        onKeyUp={handleKeyUp}
          type="text"
          className="form-control"
          placeholder="Write your task..."
          aria-label="new-task"
          onChange={e => setInputValue(e.target.value)} value={inputValue} 
        />
      </div>
      <ul className="list-group">
        {todos.map((t, index) => (
          <Item key={index} id={index} onClickRemoteItem={handleRemoveItem} text={t.label}/>    
        ))}
      </ul>
    </div>
  );
};

export default TodoList;