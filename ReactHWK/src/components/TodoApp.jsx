import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    // Validation checks
    if (todoText.trim() === '') {
      alert('Todo text cannot be blank');
      return;
    }

    if (todoText.length > 255) {
      alert('Todo text should be no more than 255 characters');
      return;
    }

    if (todos.some((todo) => todo.text === todoText)) {
      alert('Duplicate todo item');
      return;
    }

    // Add todo to the list
    setTodos([...todos, { id: Date.now(), text: todoText }]);
    setTodoText('');
  };

  const deleteTodo = (id) => {
    // Filter out the todo with the specified id
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="border-none mx-auto p-4 flex flex-col items-center bg-sky-500">

      <h1 className="underline font-extrabold text-6xl p-5 text-black-500 text-center font-sans"> Todo App </h1>

      <input className="min-w-0 mx-auto border-2 border-slate-800 bg-sky-400 text-black placeholder-black mt-1 p-2 rounded-full w-full" type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Enter todo text"/>

      <button className="border-2 border-white mt-5 mb-5 px-5 py-2 bg-black rounded-full hover:bg-gray-500 text-white" onClick={addTodo}>Add Todo</button>

      <ul className="py-5 bg-sky-800 rounded list-disc font-mono text-black text-lg break-all justify-items-center">
          
          {todos.map((todo) => (
            
            
            <li key={todo.id} className="justify-center mb-2 ml-2 mr-4 list-none">
            <button className="ml-2 border-2 border-slate-800 mr-2 px-2 py-1 bg-red-500 text-white rounded-full" onClick={() => deleteTodo(todo.id)}> Delete </button>
            {todo.text}
            </li>          
            
          
          ))}
      </ul>
    </div>
    
    
  );
};

export default TodoApp;