import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (tasks.find(t => t.taskName === task.taskName)) {
      alert("Task already exists");
      return;
    }
    const newTask = {
      ...task,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (editedTask) => {
    setTasks(tasks.map(task => (task.id === editedTask.id ? editedTask : task)));
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <h1 className="underline text-5xl font-bold mb-10 text-center">Task Manager</h1>
        <TaskForm onAddTask={addTask} tasks={tasks} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />
      </div>
    </div>
  );
}

export default TaskManager;