import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';

const Task = ({ task, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditTask(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded p-2 mb-4 relative">
      {isEditing ? (
        <div>
          <input type="text" name="taskName" value={editedTask.taskName} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 mb-2 text-black" style={{ backgroundColor: 'white' }}/>
          <input type="range" name="priority" min="1" max="5" value={editedTask.priority} onChange={handleChange} className="mb-2"/>
          <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1 mb-2 text-black" style={{ backgroundColor: 'white' }}/>
          <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            <h3 className="break-words font-bold mb-2">{task.taskName}</h3>
            <p className="mb-1">Priority: {task.priority}</p>
            <p className="mb-1">Due Date: {task.dueDate}</p>
            <p className="mb-1">Created At: {task.createdAt}</p>
          </div>
          <div className="flex justify-center">
        <button onClick={handleEdit} className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
          <BiPencil size={20} />
        </button>
        <button onClick={() => onDeleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          <AiOutlineDelete size={20} color="white" />
        </button>
      </div>
        </div>
      )}
    </div>
  );
};

export default Task;