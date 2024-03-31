import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState(1);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      alert("Task name cannot be blank");
      return;
    }
    if (taskName.length > 255) {
      alert("Task name cannot be more than 255 characters");
      return;
    }
    onAddTask({ taskName, priority, dueDate });
    setTaskName('');
    setPriority(1);
    setDueDate('');
  };

  const priorityColor = `linear-gradient(to right, #00ff00 ${priority * 20}%, #ff0000 ${priority * 20}%)`;

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} maxLength={255} className="border border-gray-300 rounded px-2 py-1 mr-2 text-black" style={{ backgroundColor: 'white' }}/>
      <input type="range" min="1" max="5" value={priority} onChange={(e) => setPriority(parseInt(e.target.value))} className="mr-2"  style={{ backgroundImage: priorityColor }}/>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border border-gray-300 rounded px-2 py-1 mr-2 text-black" style={{ backgroundColor: 'white' }}/>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Add Task</button>
    </form>
  );
};

export default TaskForm;